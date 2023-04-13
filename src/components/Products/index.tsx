import { FC, Fragment, useCallback } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { Item } from "./Item";
import { Skeleton } from "../UI";
import { Filters } from "../Filters";
import { NotFound } from "../../pages";
import styles from "./Products.module.scss";
import { NoResultsImg } from "../NoResultsImg";
import { setCurrentPage } from "../../store/slices";
import placeholder from "../../assets/noResults.svg";
import { productsApi } from "../../services/ProductsService";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

export const Products: FC = () => {
  const {
    sort: sortBy,
    category: filters,
    order,
  } = useAppSelector((state) => state.filterSlice);
  const { currentPage: page } = useAppSelector((state) => state.mainSlice);
  const search = useAppSelector((state) => state.searchSlice.searchValue);
  const dispatch = useAppDispatch();
  const onChangePage = useCallback(
    (page: number) => {
      dispatch(setCurrentPage(page));
      window.scrollTo(0, 0);
    },
    [dispatch]
  );
  const {
    data: items,
    isLoading,
    error,
  } = productsApi.useFetchAllProductsQuery({
    order,
    page,
    sortBy,
    filters,
    search,
  });
  const { data } = productsApi.useFetchAllProductsQuery({
    order,
    page: page + 1,
    sortBy,
    filters,
    search,
  });
  return (
    <Fragment>
      <Filters />
      <div className={styles.products}>
        {isLoading ? (
          [...new Array(6)].map((_, i) => <Skeleton key={i} />)
        ) : error ? (
          <div className={styles.error}>
            <NotFound />
          </div>
        ) : !items || items.length < 1 ? (
          <div className={styles.noResults}>
            <NoResultsImg imgUrl={placeholder} title={"No Results Found!"} />
          </div>
        ) : (
          items?.map((i) => (
            <Item
              prices={i.prices}
              title={i.title}
              imgUrl={i.imgUrl}
              key={i.id}
              id={i.id}
              imgUrlSmall={i.imgUrlSmall}
              imgUrlMedium={i.imgUrlMedium}
              filters={i.filters}
            />
          ))
        )}
      </div>

      {!error && items && items.length > 0 && (
        <div className={styles.pagination}>
          {page > 1 && (
            <button onClick={() => onChangePage(page - 1)}>
              <AiOutlineArrowLeft />
            </button>
          )}
          <span className={styles.page}>{page}</span>
          {data && data.length > 0 && (
            <button onClick={() => onChangePage(page + 1)} name={"Next Page"}>
              <AiOutlineArrowRight />
            </button>
          )}
        </div>
      )}
    </Fragment>
  );
};
