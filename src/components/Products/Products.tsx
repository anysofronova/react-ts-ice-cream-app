import Item from "./Item/Item";
import styles from "./Products.module.scss";
import { Fragment, useState } from "react";
import { Pagination } from "@mui/material";
import Skeleton from "../UI/Skeleton";
import Filters from "../Filters/Filters";
import { useAppSelector } from "../../hooks/redux";
import { productsApi } from "../../services/ProductsService";

const Products = () => {
  const [pageCount, setPageCount] = useState(1);
  const { sort, category, order } = useAppSelector(
    (state) => state.filterSlice
  );
  const searchValue = useAppSelector((state) => state.searchSlice.searchValue);
  const { data: items, isLoading } = productsApi.useFetchAllProductsQuery({
    order,
    page: pageCount,
    sortBy: sort,
    filters: category,
    search: searchValue,
  });

  return (
    <Fragment>
      <Filters />
      <div className={styles.products}>
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items &&
            items.map((i) => (
              <Item
                prices={i.prices}
                title={i.title}
                imgUrl={i.imgUrl}
                key={i.id}
                id={i.id}
              />
            ))}
      </div>
      <div className={styles.pagination}>
        <Pagination
          count={3}
          onChange={(_, num) => setPageCount(num)}
          variant="outlined"
          color="primary"
        />
      </div>
    </Fragment>
  );
};

export default Products;
