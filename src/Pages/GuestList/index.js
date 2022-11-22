//React, React Router, Formik
import React from 'react';
import GuestList from "../../Components/Modules/GuestList/GuestList";

//Material UI
import {makeStyles} from '@material-ui/core/styles';

//Redux

//Assets

const useStyles = makeStyles(theme => ({

}));

const Index = () => {

    const classes = useStyles();

    return (
        <GuestList />
    );
};

export default Index;