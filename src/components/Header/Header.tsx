import Logo from "./Logo/Logo";
import SearchPanel from "./SearchPanel/SearchPanel";
import styles from "./Header.module.scss";
import CartBlock from "./CartBlock/CartBlock";
import { useLocation } from "react-router-dom";
import { FC, memo } from "react";

const Header: FC = memo(() => {
  const { pathname } = useLocation();
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      {pathname !== "/cart" && (
        <div className={styles.searchPanel}>
          <SearchPanel />
        </div>
      )}
      <div className={styles.cart}>
        <CartBlock />
      </div>
    </div>
  );
});

export default Header;
