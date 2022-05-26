import styles from "./Item.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import placeholder from "../../../assets/imgPlaceholder.jpeg";
import cn from "classnames";

const Item = ({
  title,
  price,
  photo,
}: {
  title: string | null;
  price: number[];
  photo: string | undefined;
}) => {
  const [iceCreamCount, setIceCreamCount] = useState(0);
  const [container, setContainer] = useState(0);
  const [ballsCount, setBallsCount] = useState(0);
  const sizes: string[] = ["1b.", "2b.", "3b."];
  const containerPrice = [0.47, 0.22];
  return (
    <div className={styles.item}>
      <div>
        <img
          src={photo || placeholder}
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
          <div className={styles.price}>
            {(price[ballsCount] + containerPrice[container]).toFixed(2)}$
          </div>
          <button onClick={() => setIceCreamCount(iceCreamCount + 1)}>
            <AiOutlinePlus /> Add
            <span>{iceCreamCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
