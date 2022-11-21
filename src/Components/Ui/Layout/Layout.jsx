//React, React Router, Formik
import React from 'react';

//Material UI
import {makeStyles} from '@material-ui/core/styles';
import Header from "../Header/Header";

//Redux

//Assets

const useStyles = makeStyles(theme => ({
    authContainer: {
        width: "100%",
        marginLeft: "auto",
        padding: `${theme.spacing(8)}px ${theme.spacing(4)}px`,
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(8),
        },
        [theme.breakpoints.up("lg")]: {
            width: "calc(100% - 232px)",
        }
    },
    contentContainer: {
        maxWidth: "1144px",
        margin: "auto"
    }
}));

const Layout = (props) => {

    const classes = useStyles();

    let content = null;
    if (true) { //!isAuthenticated
        content = <div className={classes.contentContainer}>
            {props.children}
        </div>;
    }
    else {
        content = <main className={classes.authContainer}>
            <div className={classes.contentContainer}>
                {props.children}
            </div>
        </main>;
    }

    return (
        <>
            {/*<Spinner/>
            <SnackBar/>*/}

            <Header />
            {content}
        </>
    );
};

export default Layout;