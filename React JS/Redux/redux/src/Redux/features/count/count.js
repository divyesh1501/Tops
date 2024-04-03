import { createSlice } from "@reduxjs/toolkit"

const countSlice = createSlice({
    name: "count",
    initialState: { count: 0 },
    reducers: {
        incrementOne: (state, action) => {
            state.count++
        },
        decrementOne: (state, action) => {
            state.count--
        },
        reset: (state, action) => {
            return { count: 0 }
        }
    }
})

export default countSlice.reducer
export const { incrementOne, decrementOne, reset } = countSlice.actions