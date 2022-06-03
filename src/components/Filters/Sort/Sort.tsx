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
        onChange={(e) => {
          const sort = e.target.value.split(",");
          dispatch(changeSort([...sort]));
        }}
        defaultValue={"popularity,desc"}
        inputProps={{
          title: "title",
          id: "number",
        }}
      >
        <option value={"popularity,desc"}>Best-selling</option>
        <option value={"title"}>A → Z</option>
        <option value={"title,desc"}>Z → A</option>
        <option value={"prices"}>Price: Low to High</option>
        <option value={"prices,desc"}>Price: High to Low</option>
      </NativeSelect>
    </FormControl>
  );
};

export default Sort;
