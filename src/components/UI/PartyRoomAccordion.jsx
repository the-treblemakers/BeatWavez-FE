import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import ChatList from '../Chat/ChatList';
import Queue from '../Queue/Queue';
import { useStyles } from '../styles/partyroomStyles';

export default function PartyRoomAccordion({ messages, queue }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Accordion className={classes.accordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h3">
                    Queue
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Queue queue={queue} />
            </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography variant="h3">Chat</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <ChatList messageArray={messages}/>
            </AccordionDetails>
        </Accordion>
        </div>
    );
}

PartyRoomAccordion.propTypes = {
    messages: PropTypes.array.isRequired,
    queue: PropTypes.array.isRequired
};


