import { createSlice, current } from "@reduxjs/toolkit";

import { getObjectFromLocal } from "./localStorage";

const initialState = {
  count: getObjectFromLocal('counter')?.count ?? 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => ({ ...state, count: state.count + 1 }),
    decrement: (state) => ({...state, count: state.count - 1}),
    setTo: (state, action) => ({...state, count: action.payload}),
  },
})


export const { increment, decrement, setTo } = counterSlice.actions

export default counterSlice.reducer