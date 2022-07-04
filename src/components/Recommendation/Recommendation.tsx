import styles from "./Recommendation.module.scss";
import Item from "../Products/Item/Item";
import { productsApi } from "../../services/ProductsService";
import { useAppSelector } from "../../hooks/redux";

const Recommendation = () => {
  const { cartList } = useAppSelector((state) => state.cartSlice);
  const filters = cartList
    .map((i) => i.filters && i.filters.map((j) => j).join("|"))
    .join("|");
  const ids = cartList.map((i) => i.id);
  const { data } = productsApi.useFetchAllProductsQuery({
    page: 1,
    filters,
  });
  const items = data && data.filter((i) => !ids.includes(i.id));
  return (
    <div className={styles.recommendation}>
      {items && items.length > 0 && <p>You may also like:</p>}
      <div className={styles.list}>
        {items &&
          items.map((i) => (
            <Item
              title={i.title}
              prices={i.prices}
              imgUrl={i.imgUrl}
              imgUrlSmall={i.imgUrlSmall}
              imgUrlMedium={i.imgUrlMedium}
              id={i.id}
              key={i.id}
              filters={i.filters}
            />
          ))}
      </div>
    </div>
  );
};

export default Recommendation;
