import React from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
    Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StarRateIcon from '@material-ui/icons/StarRate';;
import MicIcon from '@material-ui/icons/Mic';
import { useStyles } from '../Styles/homeStyles';

function InstructionAccordion() {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h3" style={{ margin: '1em'  }}>
                How To Play
            </Typography>
            <Accordion className={classes.root}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                >
                    <Grid container direction="row" justify="flex-start" alignItems="center">
                        <MicIcon className={classes.icon}/>
                        <Typography variant="h3">
                            Start a new karaoke room
                        </Typography>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction="column">
                    <Typography 
                        variant="body1" 
                        display='block' 
                        align='left'
                        style={{ margin: "0.5rem" }}>
                        Enter your Stage Name to become the host of your virtual karaoke party.
                        Click create new room to enter the Green Room and add songs to the queue and chat with your guests.
                    </Typography>
                    <Typography 
                        variant="body1" 
                        display='block' 
                        align='left'
                        style={{ margin: "0.5rem" }}>
                        Give your guests the room name and passcode for them to join you. Fire up the Party Room on a shared screen and start singing!
                    </Typography>
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.root}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                >
                    <Grid container direction="row" justify="flex-start" alignItems="center">
                        <StarRateIcon className={classes.icon}/>
                        <Typography variant="h3">
                            Join a karaoke room
                        </Typography>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography 
                        variant="body1" 
                        display='block' 
                        align='left'
                        style={{ margin: "0.5rem" }}>
                        Enter your stage name, get the Karaoke Room name and the passcode from your host to join your friends in the Green Room to chat, select songs, and start singing!
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>

    );
}

export default InstructionAccordion;
