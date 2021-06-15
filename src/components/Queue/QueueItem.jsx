import React from "react";
import PropTypes from "prop-types";

const QueueItem = ({ title, stageName, thumbnail }) => (
    <>
        <img src={thumbnail} alt={title} />
        <span>Singer: {stageName}</span>
        <span>Song: {title}</span>
        {/* <span>{channelName}</span> */}
    </>
);

QueueItem.propTypes = {
    title: PropTypes.string.isRequired,
    stageName: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    // channelName: PropTypes.string.isRequired,
};

export default QueueItem;
