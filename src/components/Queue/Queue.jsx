import React from "react";
import PropTypes from "prop-types";
import QueueItem from "./QueueItem";

const Queue = ({ queue }) => {

    return (
        <ul aria-label="queue">
            {queue.map((item, i) => (
                <li key={item.title + i}>
                    <QueueItem {...item} />
                </li>
            ))}
        </ul>
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
