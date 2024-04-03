import { createSlice } from "@reduxjs/toolkit"

const amountSlice = createSlice({
    name: "amount",
    initialState: { amount: 0 },
    reducers: {
        incrementAmt: (state, action) => {
            state.amount++
        },
        incrementAmtFive: (state, action) => {
            state.amount += 5
        },
        decrementAmt: (state, action) => {
            state.amount--
        },
        resetAmt: (state, action) => {
            return { amount: 0 }
        }
    }
})

export default amountSlice.reducer
export const { incrementAmt, decrementAmt, incrementAmtFive, resetAmt } = amountSlice.actions