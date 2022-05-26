import Item from "./Item/Item";
import styles from "./Products.module.scss";
import { Fragment, useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import Skeleton from "../UI/Skeleton";

const Products = () => {
  const [items, setItems] = useState([] as any[]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://628e254ba339dfef87a86df6.mockapi.io/items?p=${pageCount}&l=6`
    )
      .then((r) => {
        setIsLoading(false);
        return r.json();
      })
      .then((arr) => setItems(arr));
  }, [pageCount]);

  return (
    <Fragment>
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
