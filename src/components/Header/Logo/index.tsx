import { FC, memo } from "react";

import styles from "./Logo.module.scss";
import logo from "../../../assets/logo.png";

export const Logo: FC = memo(() => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="ice-cream logo" />
      <div className={styles.main}>
        <h1>Ice Cream</h1>
        <h2>best ice-cream in the world</h2>
      </div>
    </div>
  );
});
