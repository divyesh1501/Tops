import { createSlice } from "@reduxjs/toolkit"
import { store } from "../../app/store"

const pointSlice = createSlice({
    name: "count",
    initialState: { point: 0 },
    reducers: {
        incrementPnt: (state, action) => {
            state.point++
        },
        decrementPnt: (state, action) => {
            state.point--
        },
        resetPnt: (state, action) => {
            return { point: 0 }
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase('amount/incrementAmt', (state, action) => {
                // amountState = action?.getState().amountSlice
                let amountState = action?.payload + 1;
                // console.log("🚀 ~ .addCase ~ action:", action)
                // console.log("🚀 ~ .addCase ~ amountState:", amountState)
                // const amountState = action.store.getState().amount.value;
                console.log("🚀 ~ .addCase ~ amountState:", amountState)
                if (amountState % 5 === 0) {
                    state.point++;
                }
            })
            .addCase('amount/incrementAmtFive', (state, action) => {
                state.point++;
            })
            .addCase('amount/decrementAmt', (state, action) => {
                state.point--;
            })
    }
})

export default pointSlice.reducer
export const { incrementPnt, decrementPnt, resetPnt } = pointSlice.actions