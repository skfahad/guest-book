//React, React Router, Formik
import React from 'react';
import {Link} from "react-router-dom";

//Material UI
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";
import PageTitle from "../../Ui/PageTitle/PageTitle";
import Form from "./Form/Form";
import Button from "@material-ui/core/Button";
import {ADMIN} from "../../../helper/routes";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

//Redux

//Assets

const useStyles = makeStyles(theme => ({
    mainSection: {
        ...theme.typography.lmsCard,
        maxWidth: 600,
        margin: 'auto'
    },
    listButton: {
        marginBottom: theme.spacing(10)
    }
}));

const CreateGuest = () => {

    const classes = useStyles();

    return (
        <Grid container direction="column" className={classes.mainSection}>

            <Grid item>
                <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<ArrowForwardIcon />}
                    component={Link}
                    to={ADMIN.show}
                    className={classes.listButton}
                >
                    All Bookings
                </Button>
            </Grid>

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