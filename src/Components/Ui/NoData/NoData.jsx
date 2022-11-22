import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

// Assests
import noDataSvg from "../../../Assets/no-user.svg";

const useStyles = makeStyles((theme) => ({
    container: {
        borderRadius: "5px",
        padding: theme.spacing(7.5),
        maxWidth: "500px",
    },
    titleContainer: {
        marginBottom: theme.spacing(7.5),
        "& .MuiTypography-root": {
            textAlign: "center",
        },
    },
    bodyContainer: {
        marginBottom: theme.spacing(7.5),
        "& .MuiTypography-root": {
            textAlign: "center",
            fontSize: "18px",
        },
    },
    noUserImg: {
        width: "12rem",
    },
    info: {
        color: '#405264',
    },
}));

const NoData = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
        >
            <Grid
                className={classes.container}
                item
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <div>
                    <img src={noDataSvg} className={classes.noUserImg} />
                </div>

                <Typography variant="h5" style={{ margin: "0.5rem" }}>
                    No results to show
                </Typography>

                <Typography variant="body2" className={classes.info}>
                    Try adjusting your filters to find what you're looking for.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default NoData;
