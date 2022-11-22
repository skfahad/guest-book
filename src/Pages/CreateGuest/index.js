//React, React Router, Formik
import React from 'react';
import CreateGuest from "../../Components/Modules/CreateGuest/CreateGuest";

//Material UI
import {makeStyles} from '@material-ui/core/styles';

//Redux

//Assets

const useStyles = makeStyles(theme => ({

}));

const Index = () => {

    const classes = useStyles();

    return (
        <CreateGuest />
    );
};

export default Index;