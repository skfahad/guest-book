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
import login_side_image from "@assets/images/login-side-image.jpg";
import logo from "@assets/images/kajabi_logo.png";

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
            padding: theme.spacing(12.5),
            paddingTop: theme.spacing(25),
            position: "relative"
        },
        logo: {
            position: "absolute",
            height: "20px",
            left: "30px",
            top: "30px",
            [theme.breakpoints.down("md")]: {
                left: "50%",
                transform: "translate(-50%)"
            }
        },
        loginHeading: {
            fontWeight: "bold",
            fontSize: "20px",
            marginBottom: theme.spacing(4),
            color: theme.palette.grey.bright_grey
        },
        loginSubHeading: {
            fontSize: "14px",
            lineHeight: "17px",
            marginBottom: theme.spacing(5),
            color: theme.palette.grey.bright_grey,
            "& a": {
                color: theme.palette.link.main,
            }
        },
        alertWrapper: {
            width: "100%",
            marginBottom: theme.spacing(5),
            "& .MuiAlert-filledError": {
                backgroundColor: theme.palette.danger.background,
            }
        },
        checkboxContainer: {
            "& .MuiTypography-root": {
                color: theme.palette.grey.bright_grey,
            },
            "& .MuiCheckbox-root": {
                transform: "scale(0.7)"
            }
        },
        submitButton: {
            padding: `${theme.spacing(1.75)}px ${theme.spacing(3.75)}px`,
            borderColor: theme.palette.primary.medium,
            backgroundColor: theme.palette.primary.medium,
            "&:hover": {
                borderColor: theme.palette.primary.active,
                backgroundColor: theme.palette.primary.active,
            },
            "& .MuiButton-label": {
                fontSize: "14px",
                color: "#FFF"
            }
        },
        loginLinks: {
            textAlign: "center",
            color: theme.palette.grey.pale_sky,
            "& a": {
                fontSize: "14px",
                display: "block",
                lineHeight: 1.5
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
    const dispatch = useDispatch();

    const pendingRequest = useSelector(state => state.ui.pendingRequest);
    const errorApiResponse = useSelector(state => state.ui.apiResponse.formValidation);
    const forgotPasswordEmailSent = useSelector(state => state.auth.forgotPasswordEmailSent);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: values => {
            dispatch(login(values));
        },
    })

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

                    <Grid item>
                        <Typography className={classes.loginSubHeading}>
                            Need an account?
                            <Link to="/get_started"> Get Started</Link>
                        </Typography>
                    </Grid>

                    {/*Show first error when available*/}
                    {
                        errorApiResponse &&
                        <Grid item className={classes.alertWrapper}>
                            <Alert variant="filled" severity="error" icon={false}>
                                {errorApiResponse[Object.keys(errorApiResponse)[0]][0]}
                            </Alert>
                        </Grid>
                    }

                    {/*Show info text for reset password*/}
                    {
                        forgotPasswordEmailSent &&
                        <Grid item className={classes.alertWrapper}>
                            <Alert variant="filled" severity="info" icon={false}>
                                If your email address exists in our database, you will receive a password recovery link
                                at your
                                email address in a few minutes.
                            </Alert>
                        </Grid>
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
                                type="submit"
                                style={{marginBottom: 20}}
                                disabled={pendingRequest}
                            >
                                {pendingRequest ? "Signing in..." : "Sign in"}
                            </Button>
                        </form>
                    </Grid>

                    <Grid item className={classes.loginLinks}>
                        {/*<Typography component={Link} to={AUTH.forgotPassword}>Forgot password?</Typography>*/}
                        {/*<Typography component={Link} to="/abc">Didn't receive confirmation instructions?</Typography>*/}
                    </Grid>

                </Grid>

                <Hidden mdDown>
                    <Grid item className={`${classes.section} ${classes.imageSection}`}>
                        <div className={classes.billboard}></div>
                    </Grid>
                </Hidden>

            </Grid>

        </Grid>
    );
};

export default Login;
