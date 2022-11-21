//React, React Router, Formik
import React from "react";

//Material UI
import {makeStyles, useTheme} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

//Redux
//import {useSelector, useDispatch} from "react-redux";
//import {uiActions} from "@store/ui/slice";

//Assets
import logo from '../../../Assets/logo.png'

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        [theme.breakpoints.up("lg")]: {
            width: "calc(100% - 232px)",
        },
        marginLeft: "auto",
    },
    appbar: {
        background: "#323232",
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
        color: '#faa831',
    }
}));

const Header = () => {

    const classes = useStyles();
    //const dispatch = useDispatch();
    const theme = useTheme();

    return (
        <div className={classes.container}>
            <AppBar className={classes.appbar} position="static" color="transparent" elevation={0}>
                <Toolbar className={classes.toolbar}>

                    <div className={classes.logoContainer}>
                        <img src={logo} alt="Logo" />
                    </div>

                    <Button className={classes.logoutButton} variant="text">
                        Logout
                    </Button>

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
