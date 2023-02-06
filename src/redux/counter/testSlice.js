import { createSlice } from "@reduxjs/toolkit";


export const testSlice = createSlice({
    name: 'test',
    initialState: {
        test: 100,
    },
    reducers: {
        testAction: (state) => {
            state.test += 1
        }
    }
})

export const { testAction } = testSlice.actions;

export default testSlice.reducer;
