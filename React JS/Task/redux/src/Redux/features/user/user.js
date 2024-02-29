import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fatchUser = createAsyncThunk("/fetchuser", async () => {
    return axios({
        method: "get",
        url: "https://fakestoreapi.com/users",
    }).then((res) => {
        console.log(res)
        return res.data
    })
})
export const fatchSingleUser = createAsyncThunk("/fetcSinglehuser", async(id) => {
    return axios({
        method: "get",
        url: `https://fakestoreapi.com/users/${id}`,
    }).then((res) => {
        console.log(res)
        return res.data
    })
})

const apiSlice = createSlice({
    name: "user",
    initialState: { user: [], pending: false, errorMsg: "" },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fatchUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.pending = false;
            })
            .addCase(fatchUser.pending, (state, action) => {
                state.pending = true;
            })
            .addCase(fatchUser.rejected, (state, action) => {
                    state.errorMsg = action.error.message
                state.pending = false;
            })
            .addCase(fatchSingleUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.pending = false;
            })
            .addCase(fatchSingleUser.pending, (state, action) => {
                state.pending = true;
            })
            .addCase(fatchSingleUser.rejected, (state, action) => {
                    state.errorMsg = action.error.message
                state.pending = false;
            })
    }
})

export default apiSlice.reducer;