import Item from "./Item/Item";
import styles from "./Products.module.scss";
import { useEffect, useState } from "react";

const Products = () => {
  const [items, setItems] = useState([] as any[]);
  useEffect(() => {
    fetch("https://628e254ba339dfef87a86df6.mockapi.io/items?p=1&l=4")
      .then((r) => r.json())
      .then((arr) => setItems(arr));
  }, []);

  return (
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
  );
};

export default Products;
