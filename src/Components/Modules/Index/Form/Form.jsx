//React, React Router, Formik
import React, {useEffect} from 'react';
import { add } from 'date-fns'
import DateFnsUtils from "@date-io/date-fns";
import {useFormik} from "formik";
import { fromUnixTime, getUnixTime } from 'date-fns'
import COUNTRIES from "../../../../helper/countries";
import validationObject from "../../../../request/Guest/StoreGuestRequest";

//Material UI
import {makeStyles} from '@material-ui/core/styles';
import {FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {Autocomplete} from "@material-ui/lab";

//Redux
import {store} from "../../../../Store/Guest/actions";
import {useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";

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
            isdCode: "+91",
            phoneNumber: "",
            adults: 1,
            children: 0,
            checkInDate: getUnixTime(new Date()),
            checkOutDate: getUnixTime(add(new Date(), {days: 1})),
            category: 'Single'
        },
        onSubmit: (values, {resetForm}) => {
            dispatch(store(values, resetForm));
        },
        validationSchema: validationObject,
    })

    return (
        <form onSubmit={formik.handleSubmit}>

            <Grid container spacing={6} className={classes.container}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
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
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
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
                            error={formik.touched.isdCode && Boolean(formik.errors.isdCode)}
                            helperText={formik.touched.isdCode && formik.errors.isdCode}
                        />
                    </Grid>

                    <Grid item style={{flexGrow: 1}}>
                        <TextField
                            fullWidth
                            label="Phone Number"
                            variant="outlined"
                            name="phoneNumber"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
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
                        InputProps={{inputProps: {min: 1, max: 50}}}
                        error={formik.touched.adults && Boolean(formik.errors.adults)}
                        helperText={formik.touched.adults && formik.errors.adults}
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
                        InputProps={{inputProps: {min: 0, max: 50}}}
                        error={formik.touched.children && Boolean(formik.errors.children)}
                        helperText={formik.touched.children && formik.errors.children}
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
                        {
                            formik.touched.checkInDate && Boolean(formik.errors.checkInDate) &&
                            <FormHelperText>
                                {formik.errors.checkInDate}
                            </FormHelperText>
                        }
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
                        {
                            formik.touched.checkOutDate && Boolean(formik.errors.checkOutDate) &&
                            <FormHelperText>
                                {formik.errors.checkOutDate}
                            </FormHelperText>
                        }
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
                            error={formik.touched.category && Boolean(formik.errors.category)}
                            helperText={formik.touched.category && formik.errors.category}
                        >
                            <MenuItem value="Single">Single</MenuItem>
                            <MenuItem value="Double">Double</MenuItem>
                            <MenuItem value="Queen">Queen</MenuItem>
                            <MenuItem value="King">King</MenuItem>
                            <MenuItem value="Twin">Twin</MenuItem>
                            <MenuItem value="Studio">Studio</MenuItem>
                            <MenuItem value="Presidential Suite">Presidential Suite</MenuItem>
                            <MenuItem value="Apartments">Apartments</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Button type="submit" color="secondary" variant="contained" fullWidth>
                        Submit
                    </Button>
                </Grid>
            </Grid>

        </form>
    );
};

export default Form;