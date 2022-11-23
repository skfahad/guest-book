//React, React Router, Formik
import React from 'react';
import Header from "../Header/Header";

//Material UI
import {makeStyles} from '@material-ui/core/styles';

//Redux
import {useSelector} from "react-redux";

//Assets

const useStyles = makeStyles(theme => ({
    authContainer: {
        width: "100%",
        marginLeft: "auto",
        padding: `${theme.spacing(8)}px ${theme.spacing(4)}px`,
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(8),
        },
    },
    contentContainer: {
        maxWidth: "1144px",
        margin: "auto"
    }
}));

const Layout = (props) => {

    const classes = useStyles();

    const {isAuthenticated} = useSelector(state => state.auth);

    let content = null;
    if (!isAuthenticated) { //!isAuthenticated
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
            <Header />
            {content}
        </>
    );
};

export default Layout;