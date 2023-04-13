import { memo, useCallback } from "react";
import cn from "classnames";

import { categories } from "../../../data";
import styles from "./Categories.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeCategory, setCurrentPage } from "../../../store/slices";

export const Categories = memo(() => {
  const category = useAppSelector((state) => state.filterSlice.category);
  const dispatch = useAppDispatch();
  const onChangeCategory = useCallback(
    (title: string) => {
      dispatch(changeCategory(title === "" ? undefined : title));
      dispatch(setCurrentPage(1));
    },
    [dispatch]
  );
  return (
    <ul className={styles.categories}>
      {categories.map((i) => (
        <li
          key={i.id}
          onClick={() => onChangeCategory(i.title)}
          className={cn(
            styles.category,
            category === i.title || (category === undefined && i.title === "")
              ? styles.active
              : null
          )}
        >
          {i.title || "All"}
        </li>
      ))}
    </ul>
  );
});
