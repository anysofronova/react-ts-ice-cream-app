import { NavLink } from "react-router-dom";
import styles from "./NotFound.module.scss";
import { FC } from "react";

const NotFound: FC = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.face}>
        <div className={styles.band}>
          <div className={styles.red} />
          <div className={styles.white} />
          <div className={styles.blue} />
        </div>
        <div className={styles.eyes} />
        <div className={styles.dimples} />
        <div className={styles.mouth} />
      </div>

      <h1 className={styles.title}>Oops! Something went wrong!</h1>
      <NavLink to={"/"}>
        <div className={styles.btn}>Return to Home</div>
      </NavLink>
    </div>
  );
};

export default NotFound;
