import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import styles from "./Filters.module.scss";

// @ts-ignore
const Filters = () => {
  // @ts-ignore
  return (
    <div className={styles.filters}>
      <Categories />
      <Sort />
    </div>
  );
};

export default Filters;
