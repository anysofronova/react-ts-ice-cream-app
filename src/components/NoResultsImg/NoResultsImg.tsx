import styles from "./NoResultsImg.module.scss";
import { INoResultsImg } from "../../models/INoResultsImg";
import { FC } from "react";

const NoResultsImg: FC<INoResultsImg> = ({ imgUrl, title }) => {
  return (
    <div className={styles.empty}>
      <div className={styles.title}>{title}</div>
      <img src={imgUrl} alt="No Results" />
    </div>
  );
};

export default NoResultsImg;
