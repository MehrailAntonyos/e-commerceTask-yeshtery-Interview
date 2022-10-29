import {createSlice} from '@reduxjs/toolkit'

const counterSlice=createSlice({
    name:"counter",
    initialState:{count:0},
    reducers:{
        incremeant:(state,action)=>
        {

            console.log('jkhjfjefhfehge')
            state.count+=action.payload;
        },
        decremeant:(state)=>
        {
            state.count-=1;
        }
    }
})


export const {incremeant,decremeant}=counterSlice.actions;

export default counterSlice.reducer;
