import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    guests: [],
}

const slice = createSlice({
    name: 'guest',
    initialState,
    reducers: {
        setGuests(state, action) {
            state.guests = action.payload.guests;
        },
    },
});

export const guestActions = slice.actions;

export default slice.reducer;