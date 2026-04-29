import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: JSON.parse(localStorage.getItem("likes")) || [] };

const likes = createSlice({
  name: "likes",
  initialState,
  reducers: {
    liked: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem("likes", JSON.stringify(state.items));
    },
    clearStorage: (state) => {
      state.items = [];
      localStorage.clear();
    },
  },
});

export const { liked } = likes.actions;
export default likes.reducer;

export const selectLikestItems = (state) => state.likes.items;

export const selectLikesCount = (state) => state.likes.items.length;
