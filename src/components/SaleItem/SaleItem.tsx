import styles from "./SaleItem.module.scss";
import { ISale } from "../../models/ISale";
import { FC } from "react";

const SaleItem: FC<ISale> = ({ image }) => {
  return (
    <div className={styles.saleItem}>
      <img src={image} alt="placeholder" />
    </div>
  );
};

export default SaleItem;
