import styles from "./Categories.module.scss";
import Category from "./Category/Category";

interface ICategories {
  title: string;
  id: number;
}

const Categories = () => {
  const categories: ICategories[] = [
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
  return (
    <div className={styles.categories}>
      {categories.map((i) => (
        <Category key={i.id} title={i.title} />
      ))}
    </div>
  );
};

export default Categories;
