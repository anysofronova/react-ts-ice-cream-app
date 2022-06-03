import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  category: string | undefined;
  sort: string | undefined;
  order: string | undefined;
}

const initialState: FilterState = {
  category: undefined,
  sort: "popularity",
  order: "desc",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<string | undefined>) => {
      state.category = action.payload;
    },
    changeSort: (state, action: PayloadAction<string[]>) => {
      state.sort = action.payload[0];
      state.order = action.payload[1];
    },
  },
});

export const { changeCategory, changeSort } = filterSlice.actions;
export default filterSlice.reducer;
