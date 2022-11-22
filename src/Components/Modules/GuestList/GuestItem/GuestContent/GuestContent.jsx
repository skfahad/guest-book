//React, React Router, Formik
import React from "react";
import Typography from "@material-ui/core/Typography";
import {format, parseISO, fromUnixTime} from "date-fns";

//Material UI
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

//Redux

//Assets

const useStyles = makeStyles(theme => ({
    keyValueWrapper: {
        marginBottom: theme.spacing(3.75),
        "& .MuiTypography-root": {
            fontSize: 14,
            lineHeight: "20px"
        }
    },
    key: {
        fontWeight: "bold"
    },
    attachmentContainer: {
        "& a": {
            display: "block",
            width: "fit-content",
            color: theme.palette.primary.main
        }
    }
}));

const GuestContent = ({guest}) => {

    const classes = useStyles();

    return (
        <Grid container>

            {/*First Section*/}
            <Grid item xs={12} sm={6} container direction="column">

                <Grid item className={classes.keyValueWrapper}>
                    <Typography className={classes.key}>
                        Name
                    </Typography>
                    <Typography>
                        {guest.name}
                    </Typography>
                </Grid>



                <Grid item className={classes.keyValueWrapper}>
                    <Typography className={classes.key}>
                        Mobile Number
                    </Typography>
                    <Typography>
                        {`${guest.isdCode}${guest.phoneNumber}`}
                    </Typography>
                </Grid>

                <Grid item className={classes.keyValueWrapper}>
                    <Typography className={classes.key}>
                        Children
                    </Typography>
                    <Typography>
                        {guest.children}
                    </Typography>
                </Grid>

                <Grid item className={classes.keyValueWrapper}>
                    <Typography className={classes.key}>
                        Check Out Date
                    </Typography>
                    <Typography>
                        {format(fromUnixTime(guest.checkOutDate), 'dd/MM/yyyy')}
                    </Typography>
                </Grid>

            </Grid>

            {/*Second Section*/}
            <Grid item xs={12} sm={6} container direction="column">

                <Grid item className={classes.keyValueWrapper}>
                    <Typography className={classes.key}>
                        Email
                    </Typography>
                    <Typography>
                        {guest.email}
                    </Typography>
                </Grid>

                <Grid item className={classes.keyValueWrapper}>
                    <Typography className={classes.key}>
                        Category
                    </Typography>
                    <Typography>
                        {guest.category}
                    </Typography>
                </Grid>

                <Grid item className={classes.keyValueWrapper}>
                    <Typography className={classes.key}>
                        Adults
                    </Typography>
                    <Typography>
                        {guest.adults}
                    </Typography>
                </Grid>

                <Grid item className={classes.keyValueWrapper}>
                    <Typography className={classes.key}>
                        Check In Date
                    </Typography>
                    <Typography>
                        {format(fromUnixTime(guest.checkInDate), 'dd/MM/yyyy')}
                    </Typography>
                </Grid>

            </Grid>

        </Grid>
    );
};

export default GuestContent;