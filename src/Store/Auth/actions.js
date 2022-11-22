import {authActions} from "./slice";
import axiosInstance from "@helper/axios";

const basePath = '/auth';

/*
export const login = credential => {
    return dispatch => {

        dispatch(uiActions.setPendingRequest({pendingRequest: true}));

        axiosInstance.post(`${basePath}/login`, credential)
            .then(response => {
                dispatch(auth_actions.setAuthenticated());
                dispatch(
                    auth_actions.setUser({
                        auth_user: response.user
                    })
                );
                dispatch(uiActions.setPendingRequest({pendingRequest: false}));
                setAccessToken(response.access_token);
            })
            .catch(([error, status]) => {
                dispatch(uiActions.setErrorApiResponse(error));
                dispatch(uiActions.setPendingRequest({pendingRequest: false}));
                console.log(error.response);
            })
    }
}

export const logout = () => {
    return dispatch => {

        dispatch(uiActions.toggleSpinner({spinner: true}));

        axiosInstance.post(`${basePath}/logout`)
            .then(response => {
                UnsetAccessToken();
                dispatch(uiActions.toggleSpinner({spinner: false}));
                dispatch(auth_actions.setUnAuthenticated());
            })
            .catch(([error, status]) => {
                console.log(error.response);
                dispatch(uiActions.toggleSpinner({spinner: false}));
            })
    }
}*/
