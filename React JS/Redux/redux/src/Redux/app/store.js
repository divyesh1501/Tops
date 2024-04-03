import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../features/count/count"
import amountSlice from "../features/amount/amount";
import pointSlice from "../features/point/point";
import inputSlice from "../features/Input/Input";
import { setupListeners } from "@reduxjs/toolkit/query";
import { PostApi } from "../../Services/PostApi";

export const store = configureStore({
    reducer: {
        counteReducer: countSlice,
        amountReducer: amountSlice,
        pointReducer: pointSlice,
        inputReducer: inputSlice,
        [PostApi.reducerPath]: PostApi.reducer
    },
    middleware: (getDefaultmiddleware) =>
    getDefaultmiddleware().concat(PostApi.middleware),
});

setupListeners(store.dispatch)