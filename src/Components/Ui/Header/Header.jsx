//React, React Router, Formik
import React from "react";
import {Link, useHistory} from "react-router-dom";
import logo from '../../../Assets/logo.png'
import {AUTH} from "../../../helper/routes";

//Material UI
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

//Redux
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../Store/Auth/actions";

//Assets

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        marginLeft: "auto",
        marginBottom: theme.spacing(10)
    },
    appbar: {
        background: theme.palette.secondary.main,
        borderBottom: `1px solid ${theme.palette.grey.white_lilac}`,
    },
    toolbar: {
        flexGrow: 1,
        justifyContent: 'space-between',
        minHeight: "70px",
        padding: "0 24px"
    },
    logoContainer: {
        flexGrow: 1,
        "& img": {
            width: 160,
            verticalAlign: "middle",
        }
    },
    logoutButton: {
        color: theme.palette.primary.main,
    }
}));

const Header = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(logout(history));
    }

    const {isAuthenticated} = useSelector(state => state.auth);

    return (
        <div className={classes.container}>
            <AppBar className={classes.appbar} position="static" color="transparent" elevation={0}>
                <Toolbar className={classes.toolbar}>

                    <div className={classes.logoContainer}>
                        <img src={logo} alt="Logo" />
                    </div>

                    {
                        isAuthenticated ?
                        <Button
                            className={classes.logoutButton}
                            variant="text"
                            onClick={handleLogout}
                        >
                            Logout
                        </Button> :
                            <Button
                                className={classes.logoutButton}
                                variant="text"
                                component={Link}
                                to={AUTH.login}
                            >
                                Login
                            </Button>
                    }

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
