import { BsSearch } from "react-icons/bs";

import styles from "./SearchPanel.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { searchNewValue } from "../../../store/slices/searchSlice";

const SearchPanel = () => {
  const searchValue = useAppSelector((state) => state.searchSlice.searchValue);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.searchPanel}>
      <BsSearch />
      <input
        type="text"
        placeholder="Search an ice-cream..."
        className={styles.input}
        value={searchValue || ""}
        onChange={(e) => dispatch(searchNewValue(e.target.value))}
      />
      {searchValue && (
        <AiOutlineClose onClick={() => dispatch(searchNewValue(""))} />
      )}
    </div>
  );
};

export default SearchPanel;
