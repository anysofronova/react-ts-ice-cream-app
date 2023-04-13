import { FC, memo } from "react";

import { INoResultsImg } from "../../models";
import styles from "./NoResultsImg.module.scss";

export const NoResultsImg: FC<INoResultsImg> = memo(({ imgUrl, title }) => {
  return (
    <div className={styles.empty}>
      <div className={styles.title}>{title}</div>
      <img src={imgUrl} alt="No Results" />
    </div>
  );
});
