//React, React Router, Formik
import React from 'react';

//Material UI
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";
import PageTitle from "../../Ui/PageTitle/PageTitle";
import Form from "./Form/Form";

//Redux

//Assets

const useStyles = makeStyles(theme => ({
    mainSection: {
        ...theme.typography.lmsCard,
        maxWidth: 600,
        margin: 'auto'
    },
}));

const CreateGuest = () => {

    const classes = useStyles();

    return (
        <Grid container direction="column" className={classes.mainSection}>

            <Grid item>
                <PageTitle title="Add Booking"/>
            </Grid>

            <Grid item>
                <Form />
            </Grid>

        </Grid>
    );
};

export default CreateGuest;