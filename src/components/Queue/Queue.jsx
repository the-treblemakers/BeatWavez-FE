import React from "react";
import PropTypes from "prop-types";
import QueueItem from "./QueueItem";

const Queue = ({ queueItems }) => {

    return (
        <ul aria-label="queue">
            {queueItems.map((item) => (
                <li key={item.title}>
                    <QueueItem {...item} />
                </li>
            ))}
        </ul>
    );
};

Queue.propTypes = {
    queueItems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            stageName: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            channelName: PropTypes.string.isRequired,
        })
    ),
};

export default Queue;
