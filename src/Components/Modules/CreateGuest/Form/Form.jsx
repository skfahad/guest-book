//React, React Router, Formik
import React, {useEffect} from 'react';
import { add } from 'date-fns'
import DateFnsUtils from "@date-io/date-fns";
import {useFormik} from "formik";
import { fromUnixTime, getUnixTime } from 'date-fns'
import COUNTRIES from "../../../../helper/countries";

//Material UI
import {makeStyles} from '@material-ui/core/styles';
import {FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {Autocomplete} from "@material-ui/lab";

//Redux
import {store} from "../../../../Store/Guest/actions";
import {useDispatch} from "react-redux";

//Assets

const useStyles = makeStyles(theme => ({
    container: {
        marginBottom: theme.spacing(5)
    }
}));

const Form = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const [selectedCountry, setSelectedCountry] = React.useState(null);

    const handleDateChange = (field, date) => {
        formik.setFieldValue(field, getUnixTime(date));
    };

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        formik.setFieldValue('isdCode', country.isdCode);
    }

    useEffect(() => {
        let [defaultCountry] = COUNTRIES.filter(country => country.isoCode === 'IN');
        setSelectedCountry(defaultCountry);
        formik.setFieldValue('isdCode', defaultCountry.isdCode);
    }, [])

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            isdCode: "",
            phoneNumber: "",
            adults: 1,
            children: 0,
            checkInDate: getUnixTime(new Date()),
            checkOutDate: getUnixTime(add(new Date(), {days: 1})),
            category: '1'
        },
        onSubmit: values => {
            dispatch(store(values));
        },
    })

    return (
        <form className={classes.form}>

            <Grid container spacing={6} className={classes.container}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Autocomplete
                        options={COUNTRIES}
                        getOptionLabel={(option) => option.name}
                        value={selectedCountry}
                        onChange={(event, value) => handleCountryChange(value)}
                        renderInput={(params) => <TextField
                            {...params}
                            label="Country"
                            variant="outlined"
                        />}
                    />
                </Grid>

                <Grid item container wrap="nowrap">
                    <Grid style={{marginRight: 24}}>
                        <TextField
                            variant="outlined"
                            name="isdCode"
                            value={formik.values.isdCode}
                            onChange={formik.handleChange}
                            disabled
                            style={{minWidth: 70, maxWidth: 90}}
                        />
                    </Grid>

                    <Grid item style={{flexGrow: 1}}>
                        <TextField
                            fullWidth
                            label="Phone Number"
                            variant="outlined"
                            name="phone_number"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                        />
                    </Grid>
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="Adults"
                        variant="outlined"
                        type="number"
                        name="adults"
                        value={formik.values.adults}
                        onChange={formik.handleChange}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="Children"
                        variant="outlined"
                        type="number"
                        name="children"
                        value={formik.values.children}
                        onChange={formik.handleChange}
                    />
                </Grid>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={6}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            label="Check In Date"
                            disablePast
                            value={fromUnixTime(formik.values.checkInDate)}
                            onChange={(date) => handleDateChange('checkInDate', date)}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            label="Check Out Date"
                            minDate={add(fromUnixTime(formik.values.checkInDate), {days: 1})}
                            value={fromUnixTime(formik.values.checkOutDate)}
                            onChange={(date) => handleDateChange('checkOutDate', date)}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>

                <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Category</InputLabel>
                        <Select
                            label="Category"
                            name="category"
                            value={formik.values.category}
                            onChange={formik.handleChange}
                        >
                            <MenuItem value="1">Category 1</MenuItem>
                            <MenuItem value="2">Category 2</MenuItem>
                            <MenuItem value="3">Category 3</MenuItem>
                            <MenuItem value="4">Category 4</MenuItem>
                            <MenuItem value="5">Category 5</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

        </form>
    );
};

export default Form;