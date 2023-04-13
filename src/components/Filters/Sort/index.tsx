import { ChangeEvent, FC, memo, useCallback } from "react";

import { useAppDispatch } from "../../../hooks/redux";
import { changeSort, setCurrentPage } from "../../../store/slices";

export const Sort: FC = memo(() => {
  const dispatch = useAppDispatch();
  const onChangeSort = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value.split(",");
    dispatch(changeSort([...sort]));
    dispatch(setCurrentPage(1));
  }, []);
  return (
    <div className="flex flex-col">
      <label className="text-l font-medium self-end">Sort by</label>
      <select
        onChange={(e) => onChangeSort(e)}
        defaultValue={"popularity,desc"}
        className="outline-0 border-0"
      >
        <option value={"popularity,desc"}>Best-selling</option>
        <option value={"title"}>A → Z</option>
        <option value={"title,desc"}>Z → A</option>
        <option value={"prices"}>Price: Low to High</option>
        <option value={"prices,desc"}>Price: High to Low</option>
      </select>
    </div>
  );
});
