import styles from "./Product.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { productsApi } from "../../services/ProductsService";
import NotFound from "../NotFound/NotFound";
import placeholder from "../../assets/imgPlaceholder.jpeg";
import { FC, useEffect, useState } from "react";
import { IProduct } from "../../models/IProduct";
import OrderPanel from "../../components/Products/Item/OrderPanel/OrderPanel";
import { CircularProgress } from "@mui/material";

const Product: FC = () => {
  const id: string = useParams().id || "-10";
  const navigate = useNavigate();
  if (id === "-10") navigate("/");
  const [product, setProduct] = useState<IProduct>();
  const { data, isLoading, error } = productsApi.useFetchOneProductQuery(id);
  useEffect(() => {
    if (data && data[0]) setProduct(data[0]);
  }, [data]);
  return (
    <div className={styles.container}>
      {isLoading && <CircularProgress />}
      {error && (
        <div className={styles.error}>
          <NotFound />
        </div>
      )}
      <button className={styles.back} onClick={() => navigate(-1)}>
        Back
      </button>
      {product && (
        <div className={styles.product}>
          <div className={styles.img}>
            <img
              src={product.imgUrl || placeholder}
              alt="ice-cream"
              srcSet={`${product.imgUrlSmall} 300w, ${product.imgUrlMedium} 500w`}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.filters}>
              {product.filters?.map((i) => (
                <span className={styles.filter} key={i}>
                  {i}
                </span>
              ))}
            </div>
            {product.description && (
              <div className={styles.desc}>
                Ingredients: {product.description}
              </div>
            )}
            <table>
              <tbody>
                <tr>
                  <td>Calories</td>
                  <td>Protein</td>
                  <td>Total Fat</td>
                  <td>Total Carb.</td>
                </tr>
                <tr>
                  {product?.calorie?.map((i) => (
                    <td key={i}>{i}</td>
                  ))}
                </tr>
              </tbody>
            </table>
            <OrderPanel
              title={product.title}
              prices={product.prices}
              imgUrl={product.imgUrl}
              id={product.id}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
