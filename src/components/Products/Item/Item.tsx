import styles from "./Item.module.scss";
import photo from "../../../assets/iceCream/1.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const Item = ({ title, price }: { title: string; price: number }) => {
  const [iceCreamCount, setIceCreamCount] = useState(0);
  return (
    <div className={styles.item}>
      <img src={photo} alt="ice-Cream" className={styles.img} />
      <h4 className={styles.title}>{title}</h4>
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
  );
};

export default Item;
