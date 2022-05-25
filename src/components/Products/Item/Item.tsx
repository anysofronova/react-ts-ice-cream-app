import styles from "./Item.module.scss";
import photo from "../../../assets/iceCream/1.jpg";
import { AiOutlinePlus } from "react-icons/ai";

const Item = ({ title, price }: { title: string; price: number }) => {
  return (
    <div className={styles.item}>
      <img src={photo} alt="ice-Cream" className={styles.img} />
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.filter}>
        <ul className={styles.container}>
          <li>Waffle cone</li>
          <li>Eco - container</li>
        </ul>
        <ul className={styles.count}>
          <li>1b.</li>
          <li>2b.</li>
          <li>3b.</li>
        </ul>
      </div>
      <div className={styles.buying}>
        <div className={styles.price}>From {price}$</div>
        <button>
          <AiOutlinePlus /> Add
        </button>
      </div>
    </div>
  );
};

export default Item;
