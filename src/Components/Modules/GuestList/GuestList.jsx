//React, React Router, Formik
import React from 'react';
import guests from '../../../Data/guests.json';
import PageTitle from "../../Ui/PageTitle/PageTitle";
import GuestItem from "./GuestItem/GuestItem";

//Material UI
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";

//Redux

//Assets

const useStyles = makeStyles(theme => ({
    mainSection: {
        ...theme.typography.lmsCard,
        maxWidth: 600,
        margin: 'auto'
    },
}));

const GuestList = () => {

    const classes = useStyles();

    console.log(guests.data);

    return (
        <Grid container direction="column" className={classes.mainSection}>

            <Grid item>
                <PageTitle title="Guests"/>
            </Grid>

            <Grid item>
                {
                    guests.data.map(guest => (
                        <GuestItem key={guest.id} guest={guest}/>
                    ))
                }
            </Grid>

        </Grid>
    );
};

export default GuestList;