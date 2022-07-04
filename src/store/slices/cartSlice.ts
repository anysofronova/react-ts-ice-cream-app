import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartState } from "../../models/ICartState";
import { ItemState } from "../../models/ItemState";

const initialState: ICartState = {
  cartList: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ItemState>) => {
      const itemIndex = state.cartList.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.parameters.join("") === action.payload.parameters.join("")
      );
      itemIndex >= 0
        ? (state.cartList[itemIndex].count += 1)
        : state.cartList.push({ ...action.payload });
      cartSlice.caseReducers.calculateCountAndPrice(state);
    },
    minusItem: (state, action: PayloadAction<ItemState>) => {
      const itemIndex = state.cartList.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.parameters.join("") === action.payload.parameters.join("")
      );
      state.cartList[itemIndex].count > 1
        ? (state.cartList[itemIndex].count -= 1)
        : state.cartList.splice(itemIndex, 1);
      cartSlice.caseReducers.calculateCountAndPrice(state);
    },
    deleteItem: (state, action: PayloadAction<ItemState>) => {
      state.cartList = state.cartList.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.parameters.join("") === action.payload.parameters.join("")
          )
      );
      cartSlice.caseReducers.calculateCountAndPrice(state);
    },
    clearCart: (state) => {
      state.cartList = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
    calculateCountAndPrice: (state) => {
      state.totalCount = state.cartList.reduce(
        (count, item) => count + item.count,
        0
      );
      state.totalPrice = +state.cartList
        .reduce((sum, item) => sum + item.finalPrice * item.count, 0)
        .toFixed(2);
    },
  },
});

export const { addItem, minusItem, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
