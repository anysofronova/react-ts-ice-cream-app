import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import styles from "./Filters.module.scss";
import { FC, memo } from "react";

const Filters: FC = memo(() => {
  return (
    <div className={styles.filters}>
      <div className={styles.categories}>
        <Categories />
      </div>
      <div className={styles.sort}>
        <Sort />
      </div>
    </div>
  );
});

export default Filters;
