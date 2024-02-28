import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../features/count/count"
import amountSlice from "../features/amount/amount";
import pointSlice from "../features/point/point";
import inputSlice from "../features/Input/Input";
import apiSlice from "../features/user/user";

export const store = configureStore({
    reducer: {
        counteReducer: countSlice,
        amountReducer: amountSlice,
        pointReducer: pointSlice,
        inputReducer: inputSlice,
        apiReducer: apiSlice
    }
});