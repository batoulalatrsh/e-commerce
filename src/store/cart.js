import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: JSON.parse(localStorage.getItem("cart")) || [] };

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existing = state.items.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size,
      );

      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size,
      );

      if (index === -1) return;

      if (state.items[index].quantity === 1) {
        state.items.splice(index, 1);
      } else {
        state.items[index].quantity -= 1;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem } = cart.actions;
export default cart.reducer;

export const selectCartItems = (state) => state.cart.items;

export function selectTotalPrice(state) {
  return selectCartItems(state).reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

export function selectCartCount(state) {
  return selectCartItems(state).reduce((total, item) => {
    return total + item.quantity;
  }, 0);
}
