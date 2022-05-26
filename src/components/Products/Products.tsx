import Item from "./Item/Item";
import styles from "./Products.module.scss";
import { iceCreams } from "../../data/iceCreams";

const Products = () => {
  return (
    <div className={styles.products}>
      {iceCreams.map((i) => (
        <Item
          price={i.prices[0][0] + i.prices[1][1]}
          title={i.title}
          photo={i.imgUrl}
          key={i.id}
        />
      ))}
    </div>
  );
};

export default Products;
