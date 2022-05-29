import Item from "./Item/Item";
import styles from "./Products.module.scss";
import { Fragment, useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import Skeleton from "../UI/Skeleton";
import Filters from "../Filters/Filters";
import { useAppSelector } from "../../hooks/redux";

const Products = () => {
  const [items, setItems] = useState([] as any[]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { sort, category } = useAppSelector((state) => state.filterSlice);
  const searchValue = useAppSelector((state) => state.searchSlice.searchValue);
  useEffect(() => {
    fetch(
      `https://628e254ba339dfef87a86df6.mockapi.io/items?p=${pageCount}&l=6${
        sort ? `&sortBy=${sort}` : ""
      }${category ? `&filters=${category}` : ""}${
        searchValue ? `&search=${searchValue.toUpperCase()}` : ""
      }`
    )
      .then((r) => {
        setIsLoading(false);
        return r.json();
      })
      .then((arr) => setItems(arr));
    window.scrollTo(0, 0);
  }, [pageCount, sort, category, searchValue]);

  return (
    <Fragment>
      <Filters />
      <div className={styles.products}>
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((i) => (
              <Item
                price={i.iceCreamPrices}
                title={i.title}
                photo={i.imgUrl}
                key={i.id}
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
