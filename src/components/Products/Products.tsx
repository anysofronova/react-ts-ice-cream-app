import Item from "./Item/Item";
import styles from "./Products.module.scss";

const Products = () => {
  return (
    <div className={styles.products}>
      <Item price={200} title={"First"} />
      <Item price={200} title={"First"} />
      <Item price={200} title={"First"} />
      <Item price={200} title={"First"} />
      <Item price={200} title={"First"} />
      <Item price={200} title={"First"} />
    </div>
  );
};

export default Products;
