import * as Yup from "yup";
import {fromUnixTime} from 'date-fns'

let validationObject = Yup.object().shape({
    email: Yup.string()
        .trim()
        .required('Email is required')
        .email('Invalid Email')
        .max(320, 'Max 320 characters allowed'),
    password: Yup.string()
        .trim()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
});

export default validationObject;