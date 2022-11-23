import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {AUTH} from "../../../helper/routes";

const ProtectedRoute = ({component: Component, ...rest}) => {

    const {isAuthenticated} = useSelector(state => state.auth);

    console.log('isAuthenticated: ', isAuthenticated);

    return (
        <Route {...rest}>
            {
                isAuthenticated ? <Component {...rest}/> : <Redirect to={AUTH.login}/>
            }
        </Route>
    );
};

export default ProtectedRoute;
