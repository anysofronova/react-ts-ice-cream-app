import Item from "./Item/Item";
import styles from "./Products.module.scss";
import { Fragment, useEffect, useState } from "react";
import { Pagination } from "@mui/material";

const Products = () => {
  const [items, setItems] = useState([] as any[]);
  const [pageCount, setPageCount] = useState(1);
  useEffect(() => {
    fetch(
      `https://628e254ba339dfef87a86df6.mockapi.io/items?p=${pageCount}&l=5`
    )
      .then((r) => r.json())
      .then((arr) => setItems(arr));
  }, [pageCount]);

  return (
    <Fragment>
      <div className={styles.products}>
        {items.map((i) => (
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
