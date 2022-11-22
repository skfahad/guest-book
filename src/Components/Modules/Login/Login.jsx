//React, React Router, Formik
import React from "react";
import {useFormik} from "formik";
import {Link} from "react-router-dom";

//Redux
//import {useDispatch, useSelector} from "react-redux";
//import {login} from "@store/Auth/actions";

//Material UI
import {Grid, Hidden, makeStyles, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {Alert} from "@material-ui/lab";

//Assets
import login_side_image from "../../../Assets/side-image.png";
import logo from "../../../Assets/logo.png";

const Login = () => {

    const useStyles = makeStyles(theme => ({
        rootContainer: {
            height: "100vh",
        },
        loginContainer: {
            // width: "800px",
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
        /*loginSubHeading: {
            fontSize: "14px",
            lineHeight: "17px",
            marginBottom: theme.spacing(5),
            color: theme.palette.grey.bright_grey,
            "& a": {
                color: theme.palette.link.main,
            }
        },*/
        alertWrapper: {
            width: "100%",
            marginBottom: theme.spacing(5),
            "& .MuiAlert-filledError": {
                backgroundColor: '#f0574dd9',
            }
        },
        submitButton: {
            padding: `${theme.spacing(1.75)}px ${theme.spacing(3.75)}px`,
            marginBottom: theme.spacing(5),
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
        }
    }));

    const classes = useStyles();
    //const dispatch = useDispatch();

    //const pendingRequest = useSelector(state => state.ui.pendingRequest);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: values => {
            //dispatch(login(values));
        },
    });

    return (

        <Grid container className={classes.rootContainer}>

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

                    {/*<Grid item>
                        <Typography className={classes.loginSubHeading}>
                            Need an account?
                            <Link to="/get_started"> Get Started</Link>
                        </Typography>
                    </Grid>*/}

                    {/*Show first error when available*/}
                    {
                        /*errorApiResponse &&
                        <Grid item className={classes.alertWrapper}>
                            <Alert variant="filled" severity="error" icon={false}>
                                {errorApiResponse[Object.keys(errorApiResponse)[0]][0]}
                            </Alert>
                        </Grid>*/
                    }

                    <Grid item>
                        <form onSubmit={formik.handleSubmit} autoComplete="off">
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
                                style={{marginBottom: 20}}
                            />
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
                                style={{marginBottom: 20}}
                            />
                            <Button
                                className={classes.submitButton}
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                                //disabled={pendingRequest}
                            >
                                Sign in
                                {/*{pendingRequest ? "Signing in..." : "Sign in"}*/}
                            </Button>
                        </form>
                    </Grid>

                </Grid>

                <Hidden mdDown>
                    <Grid item className={classes.section}>
                        <div className={classes.billboard}></div>
                    </Grid>
                </Hidden>

            </Grid>

        </Grid>
    );
};

export default Login;
