import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./Cart.module.scss";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.sum}>1234 $</div>
      <div className={styles.count}>
        <div className={styles.icon}>
          <AiOutlineShoppingCart />
        </div>
        <div className={styles.num}>5</div>
      </div>
    </div>
  );
};
export default Cart;
