//React, React Router, Formik
import React from 'react';

//Material UI
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Grid, Typography} from "@material-ui/core";

//Redux

//Assets

const useStyles = makeStyles((theme) => ({
    Container: {
        marginBottom: theme.spacing(8),
    },
    titleContainer: {
        "& .MuiTypography-root": {
            ...theme.typography.lmsHeading1,
            marginRight: '0.6rem'
        },
        "& .MuiSvgIcon-root": {
            width: '20px',
            height: '20px',
            color: theme.palette.grey.gull_gray,
            cursor: 'pointer',
            "&:hover": {
                color: theme.palette.grey.pickled_bluewood
            }
        },
        [theme.breakpoints.down('sm')]: {
            flexBasis: '100%',
            marginBottom: '1rem'
        }
    },
}));

const PageTitle = ({title}) => {

    const classes = useStyles();

    return (
        <Grid container alignItems="center" className={classes.Container}>
            <Grid item container alignItems="center" xs className={classes.titleContainer}>
                <Typography variant="h1">{title}</Typography>
            </Grid>
        </Grid>
    )
}

export default PageTitle;
