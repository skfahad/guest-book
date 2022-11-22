import {configureStore} from "@reduxjs/toolkit";
import authReducer from './Auth/slice';
import guestReducer from './Guest/slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        guest: guestReducer,
    }
});

export default store;