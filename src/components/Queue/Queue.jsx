import React from "react";
import PropTypes from "prop-types";
import QueueItem from "./QueueItem";
import { List, ListItem } from '@material-ui/core';
import { useStyles } from '../Styles/queueStyles';

//add currentlyPlaying state to track queue
const Queue = ({ queue }) => {
    const classes = useStyles();
    
    return (
        <List 
            aria-label="queue"
            style={{ maxHeight: 200, overflow: 'auto', width: "100%" }}>
            {queue.map((item, i) => (
                <ListItem 
                    key={item.title + i} 
                    // className={ currentlyPlaying ? classes.current : classes.queueItem }
                    className={classes.queueItem }
                    >
                    <QueueItem {...item} />
                </ListItem>
            ))}
        </List>
    );
};

Queue.propTypes = {
    queue: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            stageName: PropTypes.string.isRequired,
        })
    ),
    // currentlyPlaying: PropTypes.number.isRequired,
};

export default Queue;
