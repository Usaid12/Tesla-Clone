import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../car/carSlice"
export const Store=configureStore({
    reducer:{
       car:carReducer,
    },
})