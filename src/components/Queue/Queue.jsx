import React from "react";
import PropTypes from "prop-types";
import QueueItem from "./QueueItem";

const Queue = ({ queueItems }) => (
    <ul>
        {queueItems.map((item) => (
            <li key={item.title}>
                <QueueItem {...QueueItem} />
            </li>
        ))}
    </ul>
);

Queue.propTypes = {
    queueItems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            singer: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
        })
    ),
};

export default Queue;
