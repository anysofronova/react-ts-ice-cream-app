import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import searchSlice from "./slices/searchSlice";
import cartSlice from "./slices/cartSlice";
import mainSlice from "./slices/mainSlice";
import { productsApi } from "../services/ProductsService";

export const store = configureStore({
  reducer: {
    filterSlice,
    searchSlice,
    cartSlice,
    mainSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
