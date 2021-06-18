import React from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";



function InstructionAccordion() {


    return (
        <div>
            <Typography variant="h3" style={{ margin: '1em'  }}>
                How To Play
            </Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                >
                    <Typography variant="h3">
                        HOST: Start a new karaoke room
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1" display='block' align='center'>
                        Enter your Stage Name to become a host of your virtual karaoke party.
                        Click create new room to enter the Green Room and add songs to the cue and chat with your guests.
                        Give your guests the room name and passcode for them to join you. Start singing!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                >
                    <Typography variant="h3">
                        GUEST: Join a karaoke room
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1" display='block' align='center'>
                        Enter your stage name, get the Karaoke Room name and the passcode from your host to join your friends in the Green Room to chat, select songs, and start singing!
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>

    );
}

export default InstructionAccordion;
