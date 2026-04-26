import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addItem } = cart.actions;
export default cart.reducer;
