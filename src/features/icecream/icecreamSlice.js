import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfIceCreams: 20,    
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: state => {
            state.numberOfIceCreams -= 1;
        },
        restocked: (state, action) => {
            state.numberOfIceCreams += action.payload;
        }
    }
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions