import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

import styles from "./Cart.module.scss";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.top}>
        <div className={styles.title}>
          <AiOutlineShoppingCart />
          Cart
        </div>
        <div className={styles.clear}>
          <button>
            <BsTrash />
            Clear Cart
          </button>
        </div>
      </div>

      <CartItem
        img={
          "https://i.ibb.co/XYgMSnW/F0-CDBFF0-5-A02-470-C-A824-B3-A8757-D75-CE.jpg"
        }
        title={"MANGO SORBET"}
        count={2}
        price={2.3}
      />
      <CartItem
        img={
          "https://i.ibb.co/XYgMSnW/F0-CDBFF0-5-A02-470-C-A824-B3-A8757-D75-CE.jpg"
        }
        title={"MANGO SORBET"}
        count={2}
        price={2.3}
      />
      <CartItem
        img={
          "https://i.ibb.co/XYgMSnW/F0-CDBFF0-5-A02-470-C-A824-B3-A8757-D75-CE.jpg"
        }
        title={"MANGO SORBET"}
        count={2}
        price={2.3}
      />
      <CartItem
        img={
          "https://i.ibb.co/XYgMSnW/F0-CDBFF0-5-A02-470-C-A824-B3-A8757-D75-CE.jpg"
        }
        title={"MANGO SORBET"}
        count={2}
        price={2.3}
      />
      <div className={styles.total}>Total: 7$</div>
      <div className={styles.bottom}>
        <button className={styles.back}>Back</button>
        <button className={styles.buy}>Buy</button>
      </div>
    </div>
  );
};

export default Cart;
