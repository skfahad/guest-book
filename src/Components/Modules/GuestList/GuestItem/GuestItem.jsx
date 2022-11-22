//React, React Router, Formik
import React from "react";
import {format, fromUnixTime, parseISO} from "date-fns";
import GuestContent from "./GuestContent/GuestContent";

//Material UI
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {useMediaQuery} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";

//Redux

//Assets

const useStyles = makeStyles(theme => ({
    accordion: {
        width: "100%",
        borderRadius: ".375rem",
        border: `.0625rem solid v`,
        boxShadow: "none",
        marginBottom: theme.spacing(3),
        "& .MuiAccordionSummary-content": {
            minWidth: 0,
            margin: 0,
            width: '100%'
        },
        "&:before": {
            backgroundColor: "unset"
        }
    },
    accordSummary: {
        padding: theme.spacing(1, 4),
        borderBottom: `.0625rem solid #e0e7f1`,
        "& .MuiAccordionSummary-expandIcon": {

        }
    },
    headingNameWrapper: {
        flexGrow: 1,
        fontWeight: 'bold',
        "& .MuiTypography-root": {
            fontWeight: '500'
        }
    },
    headingSubjectWrapper: {
        width: '100%',
        "& .MuiTypography-root": {
            fontWeight: '500'
        },
    },
    headingDate: {
        whiteSpace: "nowrap",
        fontWeight: '500',
    },
    accordDetailRoot: {
        padding: theme.spacing(5),
        backgroundColor: '#fdfdfd'
    }
}));

const GuestItem = ({guest}) => {

    const classes = useStyles();
    const theme = useTheme();

    const matches500Down = useMediaQuery(theme.breakpoints.down(500));

    return (
        <Accordion className={classes.accordion}>
            <AccordionSummary
                className={classes.accordSummary}
                expandIcon={<ExpandMoreIcon/>}
            >
                <Grid container direction="column">
                    <Grid
                        item
                        container
                        alignItems={matches500Down ? 'flex-start' : 'center'}
                        direction={matches500Down ? 'column' : 'row'}
                        wrap="nowrap">
                        <Grid item className={classes.headingNameWrapper}>
                            <Typography noWrap>{guest.name}</Typography>
                        </Grid>
                        <Grid item className={classes.headingDate}>
                            {format(fromUnixTime(guest.createdAt), 'dd/MM/yyyy')}
                        </Grid>
                    </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails className={classes.accordDetailRoot}>
                <GuestContent guest={guest}/>
            </AccordionDetails>
        </Accordion>
    );
};

export default GuestItem;