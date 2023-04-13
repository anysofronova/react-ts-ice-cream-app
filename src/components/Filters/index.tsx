import { FC, memo } from "react";

import { Sort } from "./Sort";
import { Categories } from "./Categories";
import styles from "./Filters.module.scss";

export const Filters: FC = memo(() => {
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
