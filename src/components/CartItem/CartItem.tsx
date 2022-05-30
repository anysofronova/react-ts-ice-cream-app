import React from "react";

import styles from "./CartItem.module.scss";
import {
  AiOutlineClose,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { useAppDispatch } from "../../hooks/redux";
import { addItem, minusItem, deleteItem } from "../../store/slices/cartSlice";

interface ICartItem {
  imgUrl?: string;
  title: string;
  count: number;
  finalPrice: number;
  id: number;
  parameters: number[];
}

const CartItem = ({
  imgUrl,
  title,
  count,
  finalPrice,
  id,
  parameters,
}: ICartItem) => {
  const dispatch = useAppDispatch();
  const sizes: string[] = ["1b.", "2b.", "3b."];
  const container: string[] = ["Waffle cone", "Eco"];
  const data = { id, title, imgUrl, finalPrice, count, parameters };
  return (
    <div className={styles.cartItem}>
      <div className={styles.img}>
        <img src={imgUrl} alt="ice-cream" />
      </div>
      <div className={styles.titles}>
        <div className={styles.title}>{title}</div>
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
