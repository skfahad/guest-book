import {guestActions} from "./slice";
import axios from "axios";

export const show = (formData) => {

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
            resetForm();
        })
        .catch(error => {
            //dispatch(uiActions.setErrorApiResponse(error));
        })
}

export const exportToExcel = () => {
    window.location = 'http://localhost:5000/api/exportToExcel';
}

export const exportToPdf = () => {
    window.location = 'http://localhost:5000/api/exportToPdf';
}
