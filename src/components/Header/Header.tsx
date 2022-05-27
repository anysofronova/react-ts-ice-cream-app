import Logo from "./Logo/Logo";
import SearchPanel from "./SearchPanel/SearchPanel";
import styles from "./Header.module.scss";
import CartBlock from "./CartBlock/CartBlock";

const Header = (
  props: JSX.IntrinsicAttributes & { searchValue: any; setSearchValue: any }
) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.searchPanel}>
        <SearchPanel {...props} />
      </div>
      <div className={styles.cart}>
        <CartBlock />
      </div>
    </div>
  );
};

export default Header;
