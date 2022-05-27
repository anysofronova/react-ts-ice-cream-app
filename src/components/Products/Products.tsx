import Item from "./Item/Item";
import styles from "./Products.module.scss";
import { Fragment, SetStateAction, useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import Skeleton from "../UI/Skeleton";
import Filters from "../Filters/Filters";

const Products = () => {
  const [items, setItems] = useState([] as any[]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");
  const changeCategory = (newCategory: SetStateAction<string>) => {
    setCategory(newCategory === "All" ? "" : newCategory);
  };
  const [sort, setSort] = useState("");
  const changeSort = (newSort: SetStateAction<string>) => {
    // @ts-ignore
    const value =
      newSort === "aToZ"
        ? "title"
        : newSort === "zToA"
        ? "title&order=desc"
        : newSort === "up"
        ? "iceCreamPrices"
        : newSort === "down"
        ? "iceCreamPrices&order=desc"
        : "";
    setSort(value);
  };

  useEffect(() => {
    fetch(
      `https://628e254ba339dfef87a86df6.mockapi.io/items?p=${pageCount}&l=6&sortBy=${sort}&filters=${category}`
    )
      .then((r) => {
        setIsLoading(false);
        return r.json();
      })
      .then((arr) => setItems(arr));
    window.scrollTo(0, 0);
  }, [pageCount, sort, category]);

  return (
    <Fragment>
      <Filters changeSort={changeSort} changeCategory={changeCategory} />
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
