import React from "react";
import PropTypes from "prop-types";

const QueueItem = ({ title, singer, thumbnail }) => (
    <>
        <img src={thumbnail} alt={title} />
        <span>Song: {title}</span>
        <span>Singer: {singer}</span>
    </>
);

QueueItem.propTypes = {
    title: PropTypes.string.isRequired,
    singer: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
};

export default QueueItem;
