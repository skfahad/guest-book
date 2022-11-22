import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: true,
    auth_user: null,
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated(state) {
            state.isAuthenticated = true;
        },
        setUser(state, action) {
            state.auth_user = action.payload.auth_user
        },
        setUnAuthenticated(state) {
            state.isAuthenticated = null;
            state.auth_user = null;
            state.adminEmail = '';
        },
    },
});

export const authActions = slice.actions;

export default slice.reducer;