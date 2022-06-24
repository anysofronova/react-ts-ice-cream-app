import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import filterSlice from "./slices/filterSlice";
import searchSlice from "./slices/searchSlice";
import cartSlice from "./slices/cartSlice";
import mainSlice from "./slices/mainSlice";
import { productsApi } from "../services/ProductsService";

const rootReducer = combineReducers({
  filterSlice,
  searchSlice,
  cartSlice,
  mainSlice,
  [productsApi.reducerPath]: productsApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [productsApi.reducerPath, "searchSlice", "mainSlice"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware),
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
