import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MainState {
  currentPage: number;
}

const initialState: MainState = {
  currentPage: 1,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = mainSlice.actions;
export default mainSlice.reducer;
