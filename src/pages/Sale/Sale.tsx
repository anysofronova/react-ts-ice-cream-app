import styles from "./Sale.module.scss";
import SaleItem from "../../components/SaleItem/SaleItem";
import { productsApi } from "../../services/ProductsService";
import SkeletonSale from "../../components/UI/SkeletonSale";
import NotFound from "../NotFound/NotFound";
import { FC } from "react";

const Sale: FC = () => {
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

export default Sale;
