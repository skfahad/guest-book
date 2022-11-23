//React, React Router, Formik
import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {AUTH} from "../../../helper/routes";
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
    const history = useHistory();

    const [isLoginPage, setIsLoginPage] = useState(false);

    const {isAuthenticated} = useSelector(state => state.auth);

    console.log('isLoginPage: ', isLoginPage);

    useEffect(() => {
        setIsLoginPage(history.location.pathname === AUTH.login);
    }, [])

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
            {/*<Spinner/>
            <SnackBar/>*/}

            {!isLoginPage && <Header />}
            {content}
        </>
    );
};

export default Layout;