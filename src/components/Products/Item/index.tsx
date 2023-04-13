import { FC, memo } from "react";
import { Link } from "react-router-dom";

import styles from "./Item.module.scss";
import { OrderPanel } from "./OrderPanel";
import { IProduct } from "../../../models";
import placeholder from "../../../assets/imgPlaceholder.jpeg";

export const Item: FC<IProduct> = memo(
  ({ title, prices, imgUrl, id, imgUrlSmall, imgUrlMedium, filters }) => {
    return (
      <div className={styles.item}>
        <div>
          <Link to={`/ice-cream/${id}`}>
            <img
              src={imgUrl || placeholder}
              alt="ice-Cream"
              className={styles.img}
              srcSet={`${imgUrlSmall} 300w, ${imgUrlMedium} 500w`}
            />
            <h4 className={styles.title}>{title}</h4>
          </Link>
        </div>
        <OrderPanel
          title={title}
          prices={prices}
          imgUrl={imgUrl}
          id={id}
          filters={filters}
        />
      </div>
    );
  }
);
