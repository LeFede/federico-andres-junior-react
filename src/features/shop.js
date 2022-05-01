import { createSlice, current } from "@reduxjs/toolkit";

// import { getObjectFromLocal } from "./localStorage";
import { getFromLocal } from "./localStorage";

const initialState = {
  //count: getObjectFromLocal('counter')?.count ?? 0,
  currency: getFromLocal('currency') ?? '$',
  cart: {},
  selectedCategory: getFromLocal('selectedCategory') ?? 'all',
}

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    changeCurrency: (state, {payload}) => ({
      ...state,
      currency: payload,
    }),
    changeCategory: (state, {payload}) => ({
      ...state,
      selectedCategory: payload
    }),
  },
});


export const { changeCurrency, changeCategory } = shopSlice.actions;

export default shopSlice.reducer;