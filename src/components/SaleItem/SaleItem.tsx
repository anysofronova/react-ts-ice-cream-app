import styles from "./SaleItem.module.scss";
import { ISale } from "../../models/ISale";
import { FC, memo } from "react";

const SaleItem: FC<ISale> = memo(({ image }) => {
  return (
    <div className={styles.saleItem}>
      <img src={image} alt="placeholder" />
    </div>
  );
});

export default SaleItem;
