import styles from "./Item.module.scss";
import placeholder from "../../../assets/imgPlaceholder.jpeg";
import { IProduct } from "../../../models/IProduct";
import { Link } from "react-router-dom";
import OrderPanel from "./OrderPanel/OrderPanel";
import { FC, memo } from "react";

const Item: FC<IProduct> = memo(
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

export default Item;
