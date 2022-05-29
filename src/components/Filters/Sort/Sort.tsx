import NativeSelect from "@mui/material/NativeSelect";
import styles from "./Sort.module.scss";
import { FormControl, InputLabel } from "@mui/material";
import { useAppDispatch } from "../../../hooks/redux";
import { changeSort } from "../../../store/slices/filterSlice";

const Sort = () => {
  const dispatch = useAppDispatch();
  return (
    <FormControl className={styles.sort}>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Sort by:
      </InputLabel>
      <NativeSelect
        onChange={(e) => dispatch(changeSort(e.target.value))}
        defaultValue={"_"}
        inputProps={{
          title: "title",
          id: "number",
        }}
      >
        <option value={"_"}>Best-selling</option>
        <option value={"title"}>A → Z</option>
        <option value={"title&order=desc"}>Z → A</option>
        <option value={"iceCreamPrices"}>Price: Low to High</option>
        <option value={"iceCreamPrices&order=desc"}>Price: High to Low</option>
      </NativeSelect>
    </FormControl>
  );
};

export default Sort;
