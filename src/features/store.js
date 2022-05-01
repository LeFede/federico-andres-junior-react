import { configureStore, current } from "@reduxjs/toolkit";

// import { saveObjectToLocal } from "./localStorage";
import { saveToLocal } from "./localStorage";

import counterReducer from './counter';
import shopReducer from './shop'

const store = configureStore({
  reducer: {
    //counter: counterReducer,
    shop: shopReducer,
  }
});

const selectCurrency = (store) => store.getState().shop.currency
const selectCategory = (store) => store.getState().shop.selectedCategory

let currentCurrency
let currentCategory

const handleChange = () => {

  let previousCategory = currentCategory
  currentCategory = selectCategory(store)

  let previousCurrency = currentCurrency
  currentCurrency = selectCurrency(store)

  if (currentCurrency !== previousCurrency) {
    //saveObjectToLocal('counter', store.getState().counter)
    saveToLocal('currency', currentCurrency)
    console.log('Saved currency')
  }

  // if (currentCategory !== previousCategory) {
  
  //   saveToLocal('selectedCategory', currentCategory);
  //   console.log('Saved category');
  // }

  // console.table({
  //   currentCategory,
  //   currentCurrency
  // })
}

store.subscribe(handleChange)

export default store