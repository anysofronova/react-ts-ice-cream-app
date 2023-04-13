import { FC } from "react";

import { NotFound } from "../NotFound";
import styles from "./Sale.module.scss";
import { SkeletonSale, SaleItem } from "../../components";
import { productsApi } from "../../services/ProductsService";

export const Sale: FC = () => {
  const { data, isLoading, error } = productsApi.useFetchSaleQuery("");
  return (
    <div className={styles.sale}>
      {isLoading ? (
        [...new Array(4)].map((_, i) => <SkeletonSale key={i} />)
      ) : error ? (
        <div className={styles.error}>
          <NotFound />
        </div>
      ) : (
        data?.map((i, idx) => <SaleItem image={i.image} key={idx} />)
      )}
    </div>
  );
};
