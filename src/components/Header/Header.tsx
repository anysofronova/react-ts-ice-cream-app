import Logo from "./Logo/Logo";
import SearchPanel from "./SearchPanel/SearchPanel";
import styles from "./Header.module.scss";
import CartBlock from "./CartBlock/CartBlock";
import Navigation from "./Navigation/Navigation";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.searchPanel}>
          <SearchPanel />
        </div>
        <div className={styles.cart}>
          <CartBlock />
        </div>
      </div>
      <Navigation />
    </>
  );
};

export default Header;
