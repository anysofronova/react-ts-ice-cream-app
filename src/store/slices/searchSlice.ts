import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchState {
  searchValue: string | undefined;
}

const initialState: SearchState = {
  searchValue: undefined,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchNewValue: (state, action: PayloadAction<string | undefined>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { searchNewValue } = searchSlice.actions;
export default searchSlice.reducer;
