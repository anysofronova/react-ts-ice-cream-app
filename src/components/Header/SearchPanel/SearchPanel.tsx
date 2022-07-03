import { FC, memo, useCallback, useRef } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

import styles from "./SearchPanel.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { searchNewValue } from "../../../store/slices/searchSlice";

const SearchPanel: FC = memo(() => {
  const searchValue = useAppSelector((state) => state.searchSlice.searchValue);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const onClear = useCallback(() => {
    dispatch(searchNewValue(undefined));
    if (null !== inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className={styles.searchPanel}>
      <AiOutlineSearch />
      <input
        ref={inputRef}
        type="text"
        placeholder="Search an ice-cream..."
        className={styles.input}
        value={searchValue || ""}
        onChange={(e) => dispatch(searchNewValue(e.target.value || undefined))}
      />
      {searchValue && <AiOutlineClose onClick={() => onClear()} />}
    </div>
  );
});

export default SearchPanel;
