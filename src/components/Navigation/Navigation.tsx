import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { FC, memo } from "react";
import navigationList from "../../data/navigationList";

const Navigation: FC = memo(() => {
  return (
    <nav className={styles.nav}>
      {navigationList.map((i) => (
        <Link to={i.link} key={i.id} className={styles.item}>
          {i.name}
        </Link>
      ))}
    </nav>
  );
});

export default Navigation;
