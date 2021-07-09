import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
//   }

export const shopSlice = createSlice({
    name:"shop",
    initialState:{
        numOfCakes: 10,
        numOfIceCreams: 20
    },
    reducers:{
        buycake:(state)=>{
            state.numOfCakes -=1;
        },
        buyIceCream:(state)=>{
            state.numOfIceCreams -=1;
        },
        addcakeByinc:(state,action)=>{
            state.numOfCakes +=action.payload;
        }
    }
});

export const {buycake,buyIceCream,addcakeByinc} = shopSlice.actions;
export default shopSlice.reducer;

