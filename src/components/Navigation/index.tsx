import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { navigationList } from "../../data";
import styles from "./Navigation.module.scss";

export const Navigation: FC = memo(() => {
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
