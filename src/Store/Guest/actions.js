import {guestActions} from "./slice";
import axiosInstance from "../../helper/axios";

const basePath = '/guest';

export const store = async credential => {

    //dispatch(uiActions.setPendingRequest({pendingRequest: true}));

    //axiosInstance.get(`${basePath}/store`, credential)
    /*axiosInstance.get(`/`, credential)
        .then(response => {
            console.log('response: ', response);
            //dispatch();

            //dispatch(uiActions.setPendingRequest({pendingRequest: false}));
            //setAccessToken(response.access_token);
        })
        .catch(([error, status]) => {
            //dispatch(uiActions.setErrorApiResponse(error));
            //dispatch(uiActions.setPendingRequest({pendingRequest: false}));
            console.log(error.response);
        })*/

    const response = await fetch('/');
    const body = await response.json();

    console.log('body: ', body);
}
