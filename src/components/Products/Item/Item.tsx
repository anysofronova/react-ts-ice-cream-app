import styles from "./Item.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import placeholder from "../../../assets/imgPlaceholder.jpeg";
import cn from "classnames";
import { useAppDispatch } from "../../../hooks/redux";
import { addItem } from "../../../store/slices/cartSlice";

interface IItem {
  title: string;
  price: number[];
  imgUrl: string | undefined;
  id: number;
}

const Item = ({ title, price, imgUrl, id }: IItem) => {
  const [iceCreamCount, setIceCreamCount] = useState(0);
  const [container, setContainer] = useState(0);
  const [ballsCount, setBallsCount] = useState(0);
  const sizes: string[] = ["1b.", "2b.", "3b."];
  const containerPrice = [0.47, 0.22];
  const finalPrice = +(price[ballsCount] + containerPrice[container]).toFixed(
    2
  );
  const dispatch = useAppDispatch();
  const onButton = () => {
    setIceCreamCount(iceCreamCount + 1);
    const count = 1;
    dispatch(addItem({ id, title, imgUrl, finalPrice, count }));
  };

  return (
    <div className={styles.item}>
      <div>
        <img
          src={imgUrl || placeholder}
          alt="ice-Cream"
          className={styles.img}
        />
        <h4 className={styles.title}>{title}</h4>
      </div>
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
            <span>{iceCreamCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
