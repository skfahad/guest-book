import * as Yup from "yup";
import {fromUnixTime} from 'date-fns'

let validationObject = Yup.object().shape({
    name: Yup.string()
        .trim()
        .required('Name is required')
        .max(50, 'Max 50 characters allowed'),
    email: Yup.string()
        .trim()
        .required('Email is required')
        .email('Invalid Email')
        .max(320, 'Max 320 characters allowed'),
    phoneNumber: Yup.number()
        .required('Phone number is required'),
    adults: Yup.number()
        .required('At least one adult is required')
        .min(1, 'At least one adult is required')
        .max(50, 'Cannot have more than 50 adults'),
    children: Yup.number()
        .min(0, 'Invalid children')
        .max(50, 'Cannot have more than 50 children'),
    checkInDate: Yup.string()
        .required('Check in date is required')
        .when('PastCheckInDate', {
            is: (val) => fromUnixTime(val).toDateString() < new Date().toDateString(),
            then: Yup.string().required('Invalid Date'),
        }),

});

export default validationObject;