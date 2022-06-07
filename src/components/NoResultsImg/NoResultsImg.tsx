import styles from "./NoResultsImg.module.scss";

const NoResultsImg = ({ imgUrl, title }: { imgUrl: string; title: string }) => {
  return (
    <div className={styles.empty}>
      <div className={styles.title}>{title}</div>
      <img src={imgUrl} alt="No Results" />
    </div>
  );
};

export default NoResultsImg;
