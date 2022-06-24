import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import styles from "./CartBlock.module.scss";
import { useAppSelector } from "../../../hooks/redux";
import { FC } from "react";

const CartBlock: FC = () => {
  const { totalPrice, totalCount } = useAppSelector((state) => state.cartSlice);
  return (
    <Link to={"/cart"}>
      <div className={styles.cart}>
        <div className={styles.sum}>{totalPrice} $</div>
        <div className={styles.count}>
          <div className={styles.icon}>
            <AiOutlineShoppingCart />
          </div>
          <div className={styles.num}>{totalCount}</div>
        </div>
      </div>
    </Link>
  );
};
export default CartBlock;
