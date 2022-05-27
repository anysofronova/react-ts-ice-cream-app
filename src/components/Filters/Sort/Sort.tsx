import NativeSelect from "@mui/material/NativeSelect";
import styles from "./Sort.module.scss";
import { FormControl, InputLabel } from "@mui/material";
import { SetStateAction, useState } from "react";

// @ts-ignore
const Sort = ({ changeSort }) => {
  const [, setSort] = useState("");
  const onChangeSort = (e: { target: { value: SetStateAction<string> } }) => {
    setSort(e.target.value);
    changeSort(e.target.value);
  };
  return (
    <FormControl className={styles.sort}>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Sort by:
      </InputLabel>
      <NativeSelect
        onChange={onChangeSort}
        defaultValue={"best"}
        inputProps={{
          title: "title",
          id: "number",
        }}
      >
        <option value={"best"}>Best-selling</option>
        <option value={"aToZ"}>A → Z</option>
        <option value={"zToA"}>Z → A</option>
        <option value={"up"}>Price: Low to High</option>
        <option value={"down"}>Price: High to Low</option>
      </NativeSelect>
    </FormControl>
  );
};

export default Sort;
