import styles from "./Categories.module.scss";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeCategory } from "../../../store/slices/filterSlice";
import { setCurrentPage } from "../../../store/slices/mainSlice";
import { memo, useCallback } from "react";
import myCategories from "../../../data/categories";

const Categories = memo(() => {
  const category = useAppSelector((state) => state.filterSlice.category);
  const dispatch = useAppDispatch();
  const onChangeCategory = useCallback((title: string) => {
    dispatch(changeCategory(title === "" ? undefined : title));
    dispatch(setCurrentPage(1));
  }, []);
  return (
    <ul className={styles.categories}>
      {myCategories.map((i) => (
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

export default Categories;
