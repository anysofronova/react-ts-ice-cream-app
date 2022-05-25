import styles from "./SearchPanel.module.scss";

const SearchPanel = () => {
  return (
    <div className={styles.searchPanel}>
      <input
        type="text"
        placeholder="Search an ice-cream..."
        className={styles.input}
      />
    </div>
  );
};

export default SearchPanel;
