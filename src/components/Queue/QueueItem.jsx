import React from "react";
import PropTypes from "prop-types";

const QueueItem = ({ title, stageName, thumbnail }) => (
    <>
        <img src={thumbnail} alt={title} />
        <span>Song: {title}</span>
        <span>Singer: {stageName}</span>
    </>
);

QueueItem.propTypes = {
    title: PropTypes.string.isRequired,
    stageName: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
};

export default QueueItem;
