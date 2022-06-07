import styles from "./Categories.module.scss";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeCategory } from "../../../store/slices/filterSlice";
import { setCurrentPage } from "../../../store/slices/mainSlice";

interface ICategories {
  title: string;
}

const Categories = () => {
  const categories: ICategories[] = [
    {
      title: "",
    },
    {
      title: "Gelato",
    },
    {
      title: "Sorbet",
    },
    {
      title: "Sherbet",
    },
    {
      title: "Frozen Yogurt",
    },
    {
      title: "Sugar Free",
    },
    {
      title: "Vegan",
    },
  ];
  const category = useAppSelector((state) => state.filterSlice.category);
  const dispatch = useAppDispatch();
  const onChangeCategory = (title: string) => {
    dispatch(changeCategory(title === "" ? undefined : title));
    dispatch(setCurrentPage(1));
  };
  return (
    <div className={styles.categories}>
      {categories.map((i, idx) => (
        <li
          key={idx}
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
    </div>
  );
};

export default Categories;
