import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Accordion, 
    AccordionSummary, 
    AccordionDetails } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
    }
}));

function InstructionAccordion() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h3" style={{ margin: '1em' }}>
                How To Play:
            </Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h3">
            Join a Karaoke Room 
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
            Enter your Stage Name and the Karaoke Room Name to join your friends
            and start singing!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant="h3">
            Start a New Karaoke Room
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
            Enter your Stage Name and click New Room to start a new Karaoke
            Party, then give your friends the code to join you.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default InstructionAccordion;
