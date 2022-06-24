import styles from "./Item.module.scss";
import placeholder from "../../../assets/imgPlaceholder.jpeg";
import { IProduct } from "../../../models/IProduct";
import { Link } from "react-router-dom";
import OrderPanel from "./OrderPanel/OrderPanel";

const Item = ({ title, prices, imgUrl, id }: IProduct) => {
  return (
    <div className={styles.item}>
      <div>
        <Link to={`/ice-cream/${id}`}>
          <img
            src={imgUrl || placeholder}
            alt="ice-Cream"
            className={styles.img}
          />
          <h4 className={styles.title}>{title}</h4>
        </Link>
      </div>
      <OrderPanel title={title} prices={prices} imgUrl={imgUrl} id={id} />
    </div>
  );
};

export default Item;
