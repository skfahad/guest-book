//React, React Router, Formik
import React from "react";
import {useFormik} from "formik";
import {Link, useHistory} from "react-router-dom";
import validationObject from "../../../request/Auth/LoginRequest";

//Material UI
import {Grid, Hidden, makeStyles, Select, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {Alert} from "@material-ui/lab";

//Redux
import {useDispatch} from "react-redux";
import {login} from "../../../Store/Auth/actions";

//Assets
import login_side_image from "../../../Assets/side-image.png";
import logo from "../../../Assets/logo.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {ADMIN, USER} from "../../../helper/routes";

const Login = () => {

    const useStyles = makeStyles(theme => ({
        rootContainer: {
            height: "100vh",
        },
        loginContainer: {
            width: "fit-content",
            background: "#FFF",
            minHeight: "525px",
            margin: "auto",
            boxShadow: "0 30px 60px 0 rgb(0 0 0 / 20%)",
            [theme.breakpoints.down("sm")]: {
                height: "100vh",
                boxShadow: "none"
            }
        },
        section: {
            width: "400px",
            [theme.breakpoints.down("md")]: {
                width: "375px"
            }
        },
        formSection: {
            backgroundColor: '#323232',
            padding: theme.spacing(12.5),
            paddingTop: theme.spacing(25),
            position: "relative"
        },
        logo: {
            position: "absolute",
            height: 40,
            left: 30,
            top: 30,
            [theme.breakpoints.down("md")]: {
                left: "50%",
                transform: "translate(-50%)"
            }
        },
        loginHeading: {
            fontWeight: "bold",
            fontSize: "20px",
            marginBottom: theme.spacing(7.5),
            color: '#FFF'
        },
        submitButton: {
            padding: `${theme.spacing(1.75)}px ${theme.spacing(3.75)}px`,
            margin: theme.spacing(5, 0, 4, 0),
            "& .MuiButton-label": {
                fontSize: "14px",
                color: theme.palette.secondary.main,
                fontWeight: 'bold'
            }
        },
        billboard: {
            backgroundImage: `url(${login_side_image})`,
            display: "flex",
            height: "100%",
            padding: theme.spacing(8),
            backgroundPosition: "50%",
            backgroundSize: "cover",
        },
        label: {
            fontSize: 14,
            color: '#FFF',
        },
        inputField: {
            marginBottom: theme.spacing(3.75),
            backgroundColor: '#FFF',
        },
        addButton: {

        }
    }));

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: values => {
            dispatch(login(values, history));
        },
        validationSchema: validationObject
    });

    return (

        <Grid container direction="column" className={classes.rootContainer}>

            <Grid item>
                <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<ArrowForwardIcon />}
                    component={Link}
                    to={USER.create}
                    className={classes.addButton}
                >
                    Add Booking
                </Button>
            </Grid>

            <Grid item container className={classes.loginContainer}>

                <Grid item
                      className={`${classes.section} ${classes.formSection}`}
                      container
                      direction="column"
                      alignItems="center"
                >
                    <img src={logo} className={classes.logo}/>

                    <Grid item>
                        <Typography className={classes.loginHeading}>Sign In</Typography>
                    </Grid>

                    <Grid item>
                        <form onSubmit={formik.handleSubmit} autoComplete="off">
                            <label className={classes.label}>Email</label>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                placeholder="Email"
                                className={classes.inputField}
                                variant="outlined"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                size="small"
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />

                            <label className={classes.label}>Password</label>
                            <TextField
                                fullWidth
                                id="password"
                                name="password"
                                className={classes.inputField}
                                placeholder="Password"
                                variant="outlined"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                size="small"
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <Button
                                className={classes.submitButton}
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Grid>

                </Grid>

                <Hidden mdDown>
                    <Grid item className={classes.section}>
                        <div className={classes.billboard} />
                    </Grid>
                </Hidden>

            </Grid>

        </Grid>
    );
};

export default Login;
