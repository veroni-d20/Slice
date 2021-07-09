import { configureStore } from "@reduxjs/toolkit";

import shopRed from './Slice';

export const store = configureStore({
reducer:{
    shopReducer: shopRed,
} 
});

// console.log(store.getState);
// store.dispatch(buyCake())