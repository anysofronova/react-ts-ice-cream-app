import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import styles from "./CartBlock.module.scss";

const CartBlock = () => {
  return (
    <Link to={"/cart"}>
      <div className={styles.cart}>
        <div className={styles.sum}>1234 $</div>
        <div className={styles.count}>
          <div className={styles.icon}>
            <AiOutlineShoppingCart />
          </div>
          <div className={styles.num}>5</div>
        </div>
      </div>
    </Link>
  );
};
export default CartBlock;
