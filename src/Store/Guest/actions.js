import {guestActions} from "./slice";
import axios from "axios";

export const show = (formData) => {

    console.log('formData; ', formData);

    return dispatch => {
        axios.get(`http://localhost:5000/api/show`, {
            params: formData
        })
            .then(res => {
                dispatch(guestActions.setGuests(res.data))
            })
            .catch(error => {
                //dispatch(uiActions.setErrorApiResponse(error));
            })
    }
}

export const store = (formData, resetForm) => {

    axios.post(`http://localhost:5000/api/store`, formData)
        .then(res => {
            console.log('res: ', res);
            resetForm();
        })
        .catch(error => {
            //dispatch(uiActions.setErrorApiResponse(error));
        })
}
