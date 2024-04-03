import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name: "input",
    initialState: { inputData: [] },
    reducers: {
        addInput: (state, action) => {
            state.inputData.push(action.payload)
        },

        removeInput: (state, action) => {
            state.inputData.pop(action.payload)
        },
        // removeInput: (state, action) => {
        //     state.inputData.splice(action.payload, 1);
        //   },
        editInput: (state, action) => {
            state.inputData[action.payload.editIndex] = action.payload.input
        },
        // editInput: (state, action) => {
        //     const { editIndex, value } = action.payload;
        //     state.inputData[editIndex] = value;
        //   }
    }
})

export default inputSlice.reducer
export const { addInput, removeInput, editInput } = inputSlice.actions