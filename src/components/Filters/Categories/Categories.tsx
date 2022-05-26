import styles from "./Categories.module.scss";
import { useState } from "react";
import cn from "classnames";

interface ICategories {
  title: string;
  id: number;
}

const Categories = () => {
  const categories: ICategories[] = [
    {
      title: "All",
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
      title: "Low sugar",
      id: 5,
    },
    {
      title: "Vegan",
      id: 6,
    },
  ];
  const [category, setCategory] = useState(0);
  return (
    <div className={styles.categories}>
      {categories.map((i) => (
        <li
          key={i.id}
          onClick={() => setCategory(i.id)}
          className={cn(
            styles.category,
            category === i.id ? styles.active : null
          )}
        >
          {i.title}
        </li>
      ))}
    </div>
  );
};

export default Categories;
