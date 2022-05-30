import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ItemState {
  id: number;
  title: string;
  imgUrl: string | undefined;
  finalPrice: number;
  count: number;
}

export interface CartState {
  cartList: ItemState[];
  totalPrice: number;
  totalCount: number;
}

const initialState: CartState = {
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
        (item) => item.id === action.payload.id
      );
      itemIndex >= 0
        ? (state.cartList[itemIndex].count += 1)
        : state.cartList.push({ ...action.payload });
      cartSlice.caseReducers.calculateCountAndPrice(state);
    },
    minusItem: (state, action: PayloadAction<number>) => {
      const itemIndex = state.cartList.findIndex(
        (item) => item.id === action.payload
      );
      state.cartList[itemIndex].count > 1
        ? (state.cartList[itemIndex].count -= 1)
        : state.cartList.splice(itemIndex, 1);
      cartSlice.caseReducers.calculateCountAndPrice(state);
    },
    calculateCountAndPrice: (state) => {
      state.totalCount = state.cartList.length;
      state.totalPrice = state.cartList.reduce(
        (sum, item) => sum + item.finalPrice,
        0
      );
    },
  },
});

export const { addItem, minusItem } = cartSlice.actions;
export default cartSlice.reducer;
