import {authActions} from "./slice";
import {ADMIN, USER} from "../../helper/routes";
import axios from "axios";

export const login = (formData, history) => {
    return dispatch => {

        axios.post(`http://localhost:5000/api/login`, formData)
            .then(response => {
                console.log('response: ', response);
                if (response.data.success == 1) {
                    dispatch(authActions.setAuthenticated());
                    localStorage.setItem('auth', btoa(Math.random().toString()).substring(10, 15));
                    history.push(ADMIN.show);
                }
            })
            .catch(([error, status]) => {
                console.log(error.response);
            })
    }
}

export const logout = (history) => {
    return dispatch => {

        axios.post(`http://localhost:5000/api/login`)
            .then(response => {
                localStorage.removeItem('auth');
                dispatch(authActions.setUnAuthenticated());
                history.push(USER.create);
            })
            .catch(([error, status]) => {
                console.log(error.response);
            })
    }
}
