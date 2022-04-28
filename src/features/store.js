import { configureStore, current } from "@reduxjs/toolkit";

import { saveObjectToLocal } from "./localStorage";

import counterReducer from './counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
});

const selectCount = (state) => state.counter.count

let currentValue
const handleChange = () => {

  let previousValue = currentValue
  currentValue = selectCount(store.getState())

  if (currentValue !== previousValue) {
    saveObjectToLocal('counter', store.getState().counter)
  }
}

store.subscribe(handleChange)

export default store