import { createSlice } from "@reduxjs/toolkit"

const countSlice = createSlice({
    name: "count",
    initialState: { count: 15 },
    reducers: {
        incrementOne: (state, action) => {
            state.count++
        },
        decrementOne: (state, action) => {
            state.count--
        }
    }
})

export default countSlice.reducer
export const {incrementOne, decrementOne} = countSlice.actions