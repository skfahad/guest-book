//React, React Router, Formik
import React, {useEffect} from 'react';
import PageTitle from "../../Ui/PageTitle/PageTitle";
import GuestItem from "./GuestItem/GuestItem";
import NoData from "../../Ui/NoData/NoData";
import Filter from "./GuestItem/Filter/Filter";
import {useFormik} from "formik";
import {add, getUnixTime} from "date-fns";
import GetAppIcon from '@material-ui/icons/GetApp';

//Material UI
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";

//Redux
import {useDispatch, useSelector} from "react-redux";
import {show, exportToExcel, exportToPdf} from "../../../Store/Guest/actions";

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

    const handleExcelExport = () => {
        dispatch(exportToExcel());
    }

    const handlePdfExport = () => {
        dispatch(exportToPdf());
    }

    return (
        <Grid container direction="column" className={classes.mainSection}>

            <Grid item container style={{marginBottom: 40}}>
                <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<GetAppIcon />}
                    onClick={handleExcelExport}
                    style={{marginRight: 20, marginBottom: 20}}
                >
                    Export to Excel
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<GetAppIcon />}
                    onClick={handlePdfExport}
                    style={{marginRight: 20, marginBottom: 20}}
                >
                    Export to PDF
                </Button>
            </Grid>

            <Grid item>
                <PageTitle title="Bookings"/>
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