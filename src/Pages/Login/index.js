//React, React Router, Formik
import React from 'react';

//Material UI
import {makeStyles} from '@material-ui/core/styles';
import Login from "../../Components/Modules/Login/Login";

//Redux

//Assets

const useStyles = makeStyles(theme => ({

}));

const Index = () => {

    const classes = useStyles();

    return (
        <div>
            <Login />
        </div>
    );
};

export default Index;