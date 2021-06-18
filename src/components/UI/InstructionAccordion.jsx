import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails
} from "@material-ui/core";
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
            {/* <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content" 
                >
                    <Typography variant="h3">
            Host VS Guest 
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
            Enter your Stage Name to become and the Karaoke Room Name to join your friends
            and start singing!
                    </Typography>
                </AccordionDetails>
            </Accordion> */}

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                >
                    <Typography variant="h3">
                        Start a New Karaoke Room
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1" >
                        1. Enter your Stage Name to become a host of your virtual karaoke party.
                    </Typography>
                    <Typography variant="body1">
                        2. Click Create New Room to enter the green room and add songs to the cue and chat with your guests.
                    </Typography>
                    <Typography variant='body1'>
                        3. Give your guests the room name and passcode for them to join you.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
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



        </div>

    );
}

export default InstructionAccordion;
