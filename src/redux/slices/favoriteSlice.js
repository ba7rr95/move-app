import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    items: JSON.parse(localStorage.getItem("favorites")) || []
  }
  ,
  reducers: {
    addFavorite: (state, action) => {
      console.log("state is: ",state);
      console.log("action is: ",action);
      const exists = state.items.find(m => m.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.items));
      }
    },

    removeFavorite: (state, action) => {
      state.items = state.items.filter(m => m.id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.items));
    }
  }
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;