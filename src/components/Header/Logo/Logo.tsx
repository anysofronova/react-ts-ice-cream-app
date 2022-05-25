import React from "react";
import logo from "../../../assets/logo.png";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="ice-cream logo" />
      <div className={styles.main}>
        <h1>Ice Cream</h1>
        <h3>best ice-cream in the world</h3>
      </div>
    </div>
  );
};

export default Logo;
