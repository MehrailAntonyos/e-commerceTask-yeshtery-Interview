import {createSlice} from '@reduxjs/toolkit';
const cartSlice=createSlice({
    name:"product",
    initialState:{cart:[]},
    reducers:{
        addCart:(state,action)=>
        {
            console.log('push in cart')
            state.cart.push(action.payload);
        },
        updateCart:(state,action)=>
        {
                // change data 
            state.cart[action.payload].qunatity+=1;
            state.cart[action.payload].price*=state.cart[action.payload].qunatity;
        }
    }
})

export const{addCart,updateCart}=cartSlice.actions;

export default cartSlice.reducer;

