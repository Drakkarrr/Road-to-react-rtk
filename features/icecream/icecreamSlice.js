const createSlice = require('@reduxjs/toolkit').createSlice

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

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions