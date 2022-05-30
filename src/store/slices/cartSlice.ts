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
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
