import styles from "./Category.module.scss";

interface ICategory {
  title: string;
}

const Category = ({ title }: ICategory) => {
  return <div className={styles.category}>{title}</div>;
};

export default Category;
