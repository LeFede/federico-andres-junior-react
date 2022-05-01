import { createSlice, current } from "@reduxjs/toolkit";

// import { getObjectFromLocal } from "./localStorage";
import { getFromLocal } from "./localStorage";

const initialState = {
  //count: getObjectFromLocal('counter')?.count ?? 0,
  currency: getFromLocal('currency') ?? '$',
  cart: [],
  preselect: [],
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
    changePreselect: (state, {payload}) => {
      const {id, attributeName, attributeValue} = payload
      const _state = current(state)

      const newState = {
        ..._state,
        preselect: {
          [id]: {
            ..._state.preselect[id],
            [attributeName]: attributeValue
          }
        }
      }

      console.table(newState.preselect)
      return newState
    }
  },
});


export const { changeCurrency, changeCategory, changePreselect } = shopSlice.actions;

export default shopSlice.reducer;