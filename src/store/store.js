import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import likesSlice from "./Likes";
export const store = configureStore({
  reducer: { cart: cartSlice, likes: likesSlice },
});
