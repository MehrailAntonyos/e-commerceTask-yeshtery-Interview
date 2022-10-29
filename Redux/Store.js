import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './Slices/counterSlice'
import cartReducer from './Slices/cartSlice'
export const store=configureStore({reducer :{counterReducer,cartReducer}})