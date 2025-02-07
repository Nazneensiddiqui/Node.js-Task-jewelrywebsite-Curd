import { createSlice } from "@reduxjs/toolkit";
import {  message } from 'antd';

const cartSlice=createSlice({
    name:"myCart",
    initialState:{
        cart:[]
    },
    reducers:{
        AddToCart:(state, actions)=>{
            const mycart=state.cart.filter(key=>key.id==actions.payload.id)
            if(mycart.length>=1)
            {
                message.error("Product already Added!!")
            }
            else{
                state.cart.push(actions.payload)
                message.success("Product Added!!")
            }
           }
    }
})
export const {AddToCart}=cartSlice.actions;
export default cartSlice.reducer;
