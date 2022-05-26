import styles from "./Item.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import placeholder from "../../../assets/imgPlaceholder.jpeg";

const Item = ({
  title,
  price,
  photo,
}: {
  title: string;
  price: number;
  photo: string | undefined;
}) => {
  const [iceCreamCount, setIceCreamCount] = useState(0);
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
            <li>Waffle cone</li>
            <li className={styles.active}>Eco - container</li>
          </ul>
          <ul className={styles.count}>
            <li className={styles.active}>1b.</li>
            <li>2b.</li>
            <li>3b.</li>
          </ul>
        </div>
        <div className={styles.buying}>
          <div className={styles.price}>From {price}$</div>
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
