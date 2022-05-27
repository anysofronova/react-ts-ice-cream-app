import { BsSearch } from "react-icons/bs";

import styles from "./SearchPanel.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";

// @ts-ignore
const SearchPanel = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.searchPanel}>
      <BsSearch />
      <input
        type="text"
        placeholder="Search an ice-cream..."
        className={styles.input}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && <AiOutlineClose onClick={() => setSearchValue("")} />}
    </div>
  );
};

export default SearchPanel;
