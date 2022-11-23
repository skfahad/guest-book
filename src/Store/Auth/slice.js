import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated(state) {
            state.isAuthenticated = true;
        },
        setUnAuthenticated(state) {
            state.isAuthenticated = initialState.isAuthenticated;
        },
    },
});

export const authActions = slice.actions;

export default slice.reducer;