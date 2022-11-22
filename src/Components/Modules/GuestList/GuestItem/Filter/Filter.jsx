//React, React Router, Formik
import React from 'react';
import {fromUnixTime, getUnixTime, startOfDay, endOfDay} from "date-fns";

//Material UI
import {makeStyles} from '@material-ui/core/styles';
import {useFormik} from "formik";

//Redux
import {store} from "../../../../../Store/Guest/actions";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Select
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";

//Assets

const useStyles = makeStyles(theme => ({
    container: {
        marginBottom: theme.spacing(5)
    }
}));

const Filter = ({formik}) => {

    const classes = useStyles();

    const handleDateChange = (field, date) => {
        formik.setFieldValue(field, getUnixTime(date));
    };

    return (
        <form onSubmit={formik.handleSubmit}>

            <Grid container spacing={6} className={classes.container}>

                <Grid item xs={12} style={{marginBottom: -30}}>
                    <FormControlLabel
                        control={<Checkbox
                            checked={formik.values.filterByDate}
                            onChange={formik.handleChange} name="filterByDate" />}
                        label="Filter by Date"
                    />
                </Grid>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={6}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            autoOk={true}
                            margin="normal"
                            label="Check In Date"
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
                            autoOk={true}
                            margin="normal"
                            label="Check Out Date"
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
                        <Select
                            name="category"
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            error={formik.touched.category && Boolean(formik.errors.category)}
                            helperText={formik.touched.category && formik.errors.category}
                            displayEmpty
                        >
                            <MenuItem value="">None</MenuItem>
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

            </Grid>

        </form>
    );
};

export default Filter;