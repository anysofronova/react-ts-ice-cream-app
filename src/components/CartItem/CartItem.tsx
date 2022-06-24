import { FC } from "react";
import { useAppDispatch } from "../../hooks/redux";

import styles from "./CartItem.module.scss";
import {
  AiOutlineClose,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { addItem, minusItem, deleteItem } from "../../store/slices/cartSlice";
import placeholder from "../../assets/imgPlaceholder.jpeg";
import { Link } from "react-router-dom";
import { ICartItem } from "../../models/ICartItem";

const CartItem: FC<ICartItem> = ({
  imgUrl,
  title,
  count,
  finalPrice,
  id,
  parameters,
}) => {
  const dispatch = useAppDispatch();
  const sizes: string[] = ["1b.", "2b.", "3b."];
  const container: string[] = ["Waffle cone", "Eco"];
  const data = { id, title, imgUrl, finalPrice, count, parameters };
  return (
    <div className={styles.cartItem}>
      <div className={styles.img}>
        <img src={imgUrl || placeholder} alt="ice-cream" />
      </div>
      <div className={styles.titles}>
        <Link to={`/ice-cream/${id}`}>
          <div className={styles.title}>{title}</div>
        </Link>
        <div className={styles.subtitle}>
          {container[parameters[0]]}, {sizes[parameters[1]]}
        </div>
      </div>

      <div className={styles.count}>
        <button onClick={() => dispatch(minusItem(data))}>
          <AiOutlineMinusCircle />
        </button>
        {count}
        <button onClick={() => dispatch(addItem(data))}>
          <AiOutlinePlusCircle />
        </button>
      </div>
      <div className={styles.price}>{(count * finalPrice).toFixed(2)}$</div>
      <div className={styles.delete}>
        <button onClick={() => dispatch(deleteItem(data))}>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
