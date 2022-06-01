import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link to={"/"} className={styles.item}>
        Home
      </Link>
      <Link to={"/about"} className={styles.item}>
        About Us
      </Link>
      <Link to={"/sale"} className={styles.item}>
        Sale
      </Link>
      <Link to={"/contact"} className={styles.item}>
        Contact
      </Link>
    </nav>
  );
};

export default Navigation;
