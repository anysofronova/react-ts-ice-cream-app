import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import styles from "./Filters.module.scss";

const Filters = () => {
  return (
    <div className={styles.filters}>
      <Categories />
      <Sort />
    </div>
  );
};

export default Filters;
