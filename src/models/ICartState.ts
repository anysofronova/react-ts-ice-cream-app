import { ItemState } from "./ItemState";

export interface ICartState {
  cartList: ItemState[];
  totalPrice: number;
  totalCount: number;
}
