import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import ChatList from '../Chat/ChatList';
import Queue from '../Queue/Queue';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function PartyRoomAccordion({ messages, queue }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Chat</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ChatList messageArray={messages} />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Queue</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Queue queue={queue} />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

PartyRoomAccordion.propTypes = {
    messages: PropTypes.array.isRequired,
    queue: PropTypes.array.isRequired
};


