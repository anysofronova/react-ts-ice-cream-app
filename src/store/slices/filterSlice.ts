import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  category: string;
  sort: string;
}

const initialState: FilterState = {
  category: "",
  sort: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    changeSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const { changeCategory, changeSort } = filterSlice.actions;
export default filterSlice.reducer;
