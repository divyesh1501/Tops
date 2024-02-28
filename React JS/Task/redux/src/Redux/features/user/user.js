import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fatchUser = createAsyncThunk(()=>{
    return axios({
        method: "get",
        url: "https://fakestoreapi.com/users",
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
})

const apiSlice = createSlice({
    name:"user",
    initialState:{user:[]},
    reducers:{}
})

export default apiSlice.reducer;