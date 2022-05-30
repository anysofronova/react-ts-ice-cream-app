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
}

const CartItem = ({ imgUrl, title, count, finalPrice, id }: ICartItem) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.cartItem}>
      <div className={styles.img}>
        <img src={imgUrl} alt="ice-cream" />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.count}>
        <button onClick={() => dispatch(minusItem(id))}>
          <AiOutlineMinusCircle />
        </button>
        {count}
        <button
          onClick={() =>
            dispatch(addItem({ id, title, imgUrl, finalPrice, count }))
          }
        >
          <AiOutlinePlusCircle />
        </button>
      </div>
      <div className={styles.price}>{count * finalPrice}$</div>
      <div className={styles.delete}>
        <button onClick={() => dispatch(deleteItem(id))}>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
