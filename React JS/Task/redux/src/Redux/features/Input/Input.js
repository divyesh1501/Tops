import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name: "input",
    initialState: { inputData: [] },
    reducers: {
        addInput: (state, action) => {
            state.inputData.push(action.payload)
        },
        removeInput: (state, action) => {
            state.inputData.splice(action.payload, 1);
          },
        editInput: (state, action) => {
            state.inputData[action.payload.editIndex] = action.payload.input;
        },
    }
})

export default inputSlice.reducer
export const { addInput, removeInput, editInput } = inputSlice.actions