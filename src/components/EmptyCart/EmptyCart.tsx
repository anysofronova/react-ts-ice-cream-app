import styles from "./EmptyCart.module.scss";
import emptyCartPhoto from "../../assets/emptyCart.svg";

const EmptyCart = () => {
  return (
    <div className={styles.empty}>
      <div className={styles.title}>Your Cart is empty!</div>
      <img src={emptyCartPhoto} alt="empty Cart" />
    </div>
  );
};

export default EmptyCart;
