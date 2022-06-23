import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

type navigationListType = {
  id: number;
  name: string;
  link: string;
};

const Navigation = () => {
  const navigationList: navigationListType[] = [
    { id: 0, name: "Home", link: "/" },
    { id: 1, name: "About Us", link: "/about" },
    { id: 2, name: "Sale", link: "/sale" },
    { id: 3, name: "Contact", link: "/contact" },
  ];

  console.log("Перерисовка");
  return (
    <nav className={styles.nav}>
      {navigationList.map((i) => (
        <Link to={i.link} key={i.id} className={styles.item}>
          {i.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
