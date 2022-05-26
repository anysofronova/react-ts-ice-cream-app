import NativeSelect from "@mui/material/NativeSelect";
import styles from "./Sort.module.scss";
import { FormControl, InputLabel } from "@mui/material";

const Sort = () => {
  return (
    <FormControl className={styles.sort}>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Sort by:
      </InputLabel>
      <NativeSelect
        onChange={(e) => console.log(e.target.value)}
        defaultValue={"best"}
        inputProps={{
          title: "title",
          id: "number",
        }}
      >
        <option value={"best"}>Best-selling</option>
        <option value={"up"}>Price: Low to High</option>
        <option value={"down"}>Price: High to Low</option>
      </NativeSelect>
    </FormControl>
  );
};

export default Sort;
