import { FC } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";

import styles from "./Cart.module.scss";
import { clearCart } from "../../store/slices";
import placeholder from "../../assets/emptyCart.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { CartItem, NoResultsImg, Recommendation } from "../../components";

export const Cart: FC = () => {
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
        {totalCount !== 0 && (
          <div className={styles.clear}>
            <button onClick={() => dispatch(clearCart())}>
              <AiOutlineDelete />
              Clear Cart
            </button>
          </div>
        )}
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
        <NoResultsImg imgUrl={placeholder} title={"Your Cart is empty!"} />
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
      {cartList.length > 0 && <Recommendation />}
    </div>
  );
};
