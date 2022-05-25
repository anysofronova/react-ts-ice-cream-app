import Logo from "./Logo/Logo";
import SearchPanel from "./SearchPanel/SearchPanel";
import styles from "./Header.module.scss";
import Cart from "./Cart/Cart";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <SearchPanel />
      <Cart />
    </div>
  );
};

export default Header;
