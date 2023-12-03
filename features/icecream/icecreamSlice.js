const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--;
        },
        restocked: (state, action) => {
            state.numOfIceCreams += action.payload;
        }
    },
    //  in redux tool kit all reducers dont automatiacally recieves every action,
    // hence we use extraReducers
    // object notation of extra reducers, 
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIceCreams--;
    //     }
    // }
    // using builder method
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIceCreams--;
        });
    }
});


module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;