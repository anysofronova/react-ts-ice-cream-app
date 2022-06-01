import { Fragment } from "react";
import { Pagination } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import styles from "./Products.module.scss";
import { productsApi } from "../../services/ProductsService";
import Item from "./Item/Item";
import Skeleton from "../UI/Skeleton";
import Filters from "../Filters/Filters";
import NotFound from "../../pages/NotFound/NotFound";
import { setCurrentPage } from "../../store/slices/mainSlice";

const Products = () => {
  const { sort, category, order } = useAppSelector(
    (state) => state.filterSlice
  );
  const { currentPage } = useAppSelector((state) => state.mainSlice);
  const searchValue = useAppSelector((state) => state.searchSlice.searchValue);
  const dispatch = useAppDispatch();
  const {
    data: items,
    isLoading,
    error,
  } = productsApi.useFetchAllProductsQuery({
    order,
    page: currentPage,
    sortBy: sort,
    filters: category,
    search: searchValue,
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
        ) : (
          items &&
          items.map((i) => (
            <Item
              prices={i.prices}
              title={i.title}
              imgUrl={i.imgUrl}
              key={i.id}
              id={i.id}
            />
          ))
        )}
      </div>
      <div className={styles.pagination}>
        {!error && (
          <Pagination
            count={3}
            page={currentPage}
            onChange={(_, num) => dispatch(setCurrentPage(num))}
            variant="outlined"
            color="primary"
          />
        )}
      </div>
    </Fragment>
  );
};

export default Products;
