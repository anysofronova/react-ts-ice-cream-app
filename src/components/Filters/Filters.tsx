import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import styles from "./Filters.module.scss";

// @ts-ignore
const Filters = ({ changeSort, changeCategory }) => {
  // @ts-ignore
  return (
    <div className={styles.filters}>
      <Categories changeCategory={changeCategory} />
      <Sort changeSort={changeSort} />
    </div>
  );
};

export default Filters;
