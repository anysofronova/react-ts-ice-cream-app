import React from "react";

import styles from "./CartItem.module.scss";
import {
  AiOutlineClose,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";

interface ICartItem {
  img?: string;
  title: string;
  count: number;
  price: number;
}

const CartItem = ({ img, title, count, price }: ICartItem) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.img}>
        <img src={img} alt="ice-cream" />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.count}>
        <button>
          <AiOutlinePlusCircle />
        </button>
        {count}
        <button>
          <AiOutlineMinusCircle />
        </button>
      </div>
      <div className={styles.price}>{price}$</div>
      <div className={styles.delete}>
        <button>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
