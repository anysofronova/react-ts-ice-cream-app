import { FC, memo } from "react";
import { useLocation } from "react-router-dom";

import { Logo } from "./Logo";
import { CartBlock } from "./CartBlock";
import styles from "./Header.module.scss";
import { SearchPanel } from "./SearchPanel";

export const Header: FC = memo(() => {
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
