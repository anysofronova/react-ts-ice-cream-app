import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { INavigationList } from "../../models/INavigationList";
import { FC } from "react";

const Navigation: FC = () => {
  const navigationList: INavigationList[] = [
    { id: 0, name: "Home", link: "/" },
    { id: 1, name: "About Us", link: "/about" },
    { id: 2, name: "Sale", link: "/sale" },
    { id: 3, name: "Contact", link: "/contact" },
  ];

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
