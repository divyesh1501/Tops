import { createSlice } from "@reduxjs/toolkit"

const amountSlice = createSlice({
    name: "amount",
    initialState: { amount: 100 },
    reducers: {
        incrementAmt: (state, action) => {
            state.amount++
        },
        incrementAmtFive: (state, action) => {
            state.amount += 5
        },
        decrementAmt: (state, action) => {
            state.amount--
        }
    }
})

export default amountSlice.reducer
export const { incrementAmt, decrementAmt, incrementAmtFive } = amountSlice.actions