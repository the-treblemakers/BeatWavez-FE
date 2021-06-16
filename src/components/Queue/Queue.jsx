import React from "react";
import PropTypes from "prop-types";
import QueueItem from "./QueueItem";
import { List, ListItem } from '@material-ui/core';

const Queue = ({ queue }) => {

    return (
        <List aria-label="queue">
            {queue.map((item, i) => (
                <ListItem key={item.title + i}>
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
};

export default Queue;
