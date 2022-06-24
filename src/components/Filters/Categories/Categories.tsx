import styles from "./Categories.module.scss";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeCategory } from "../../../store/slices/filterSlice";
import { setCurrentPage } from "../../../store/slices/mainSlice";
import { ICategories } from "../../../models/ICategories";

const Categories = () => {
  const categories: ICategories[] = [
    {
      title: "",
      id: 0,
    },
    {
      title: "Gelato",
      id: 1,
    },
    {
      title: "Sorbet",
      id: 2,
    },
    {
      title: "Sherbet",
      id: 3,
    },
    {
      title: "Frozen Yogurt",
      id: 4,
    },
    {
      title: "Sugar Free",
      id: 5,
    },
    {
      title: "Vegan",
      id: 6,
    },
  ];
  const category = useAppSelector((state) => state.filterSlice.category);
  const dispatch = useAppDispatch();
  const onChangeCategory = (title: string) => {
    dispatch(changeCategory(title === "" ? undefined : title));
    dispatch(setCurrentPage(1));
  };
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
};

export default Categories;
