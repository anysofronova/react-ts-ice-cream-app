import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { addItem } from "../../../../store/slices/cartSlice";
import cn from "classnames";
import { AiOutlinePlus } from "react-icons/ai";
import { IProduct } from "../../../../models/IProduct";
import styles from "./OrderPanel.module.scss";

const OrderPanel: FC<IProduct> = ({ title, prices, imgUrl, id }) => {
  const [container, setContainer] = useState<number>(0);
  const [ballsCount, setBallsCount] = useState<number>(0);
  const sizes: string[] = ["1b.", "2b.", "3b."];
  const containerPrice: number[] = [0.47, 0.22];
  const finalPrice: number = +(
    prices[ballsCount] + containerPrice[container]
  ).toFixed(2);
  const dispatch = useAppDispatch();
  const onButton = (): void => {
    const count: number = 1;
    const parameters: number[] = [container, ballsCount];
    dispatch(addItem({ id, title, imgUrl, finalPrice, count, parameters }));
  };
  const { cartList } = useAppSelector((state) => state.cartSlice);
  const count = cartList
    .filter((i) => i.id === id)
    .reduce((count, i) => count + i.count, 0);
  return (
    <div>
      <div className={styles.filter}>
        <ul className={styles.container}>
          <li
            className={cn(container || styles.active)}
            onClick={() => setContainer(0)}
          >
            Waffle cone
          </li>
          <li
            className={cn(container && styles.active)}
            onClick={() => setContainer(1)}
          >
            Eco
          </li>
        </ul>
        <ul className={styles.count}>
          {sizes.map((val, idx) => (
            <li
              key={val}
              className={cn(ballsCount === idx && styles.active)}
              onClick={() => setBallsCount(idx)}
            >
              {val}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.buying}>
        <div className={styles.price}>{finalPrice}$</div>
        <button onClick={() => onButton()}>
          <AiOutlinePlus /> Add
          <span>{count}</span>
        </button>
      </div>
    </div>
  );
};

export default OrderPanel;
