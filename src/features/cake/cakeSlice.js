import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfCakes: 10,
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: state => {
            state.numOfCakes -= 1;
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload;
        }
    }
})

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;