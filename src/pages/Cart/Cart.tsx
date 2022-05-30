import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

import styles from "./Cart.module.scss";
import CartItem from "../../components/CartItem/CartItem";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { clearCart } from "../../store/slices/cartSlice";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

const Cart = () => {
  const { cartList } = useAppSelector((state) => state.cartSlice);
  const { totalPrice, totalCount } = useAppSelector((state) => state.cartSlice);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.cart}>
      <div className={styles.top}>
        <div className={styles.title}>
          <AiOutlineShoppingCart />
          Cart
        </div>
        <div className={styles.clear}>
          <button onClick={() => dispatch(clearCart())}>
            <BsTrash />
            Clear Cart
          </button>
        </div>
      </div>
      {cartList.length ? (
        cartList.map((item) => (
          <CartItem
            imgUrl={item.imgUrl}
            title={item.title}
            count={item.count}
            finalPrice={item.finalPrice}
            key={item.id}
            id={item.id}
          />
        ))
      ) : (
        <EmptyCart />
      )}
      <div className={styles.total}>
        Total: {totalPrice}$ ({totalCount})
      </div>
      <div className={styles.bottom}>
        <button className={styles.back}>Back</button>
        <button className={styles.buy}>Buy</button>
      </div>
    </div>
  );
};

export default Cart;
