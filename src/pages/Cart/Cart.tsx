import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

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
            key={+("" + item.id + item.parameters[0] + item.parameters[1])}
            id={item.id}
            parameters={item.parameters}
          />
        ))
      ) : (
        <EmptyCart />
      )}
      <div className={styles.total}>
        Total: {totalPrice}$ ({totalCount})
      </div>
      <div className={styles.bottom}>
        <Link to={"/"} className={styles.back}>
          Back
        </Link>
        {totalCount !== 0 && <button className={styles.buy}>Buy</button>}
      </div>
    </div>
  );
};

export default Cart;
