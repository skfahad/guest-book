//React, React Router, Formik
import React, {useEffect} from 'react';
import PageTitle from "../../Ui/PageTitle/PageTitle";
import GuestItem from "./GuestItem/GuestItem";
import NoData from "../../Ui/NoData/NoData";
import Filter from "./GuestItem/Filter/Filter";
import {useFormik} from "formik";
import {add, getUnixTime} from "date-fns";

//Material UI
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";

//Redux
import {useDispatch, useSelector} from "react-redux";
import {show} from "../../../Store/Guest/actions";

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
    const dispatch = useDispatch();

    const {guests} = useSelector(state => state.guest);

    const formik = useFormik({
        initialValues: {
            filterByDate: false,
            checkInDate: getUnixTime(new Date()),
            checkOutDate: getUnixTime(add(new Date(), {days: 1})),
            category: ''
        },
        onSubmit: (values, {resetForm}) => {
            //dispatch(store(values, resetForm));
        },
    });

    useEffect(() => {
        dispatch(show(formik.values));
    }, [formik.values])

    return (
        <Grid container direction="column" className={classes.mainSection}>

            <Grid item>
                <PageTitle title="Guests"/>
            </Grid>

            <Grid item>
                <Filter formik={formik}/>
            </Grid>

            <Grid item>
                {
                    guests && guests.length ?
                    guests.map(guest => (
                        <GuestItem key={guest.id} guest={guest}/>
                    )) : <NoData />
                }
            </Grid>

        </Grid>
    );
};

export default GuestList;