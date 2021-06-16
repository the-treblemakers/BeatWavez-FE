import React from "react";
import PropTypes from "prop-types";

const QueueItem = ({ title, stageName }) => (
    <>
        <span>Singer: {stageName}</span>
        <span>Song: {title}</span>
    </>
);

QueueItem.propTypes = {
    title: PropTypes.string.isRequired,
    stageName: PropTypes.string.isRequired,
};

export default QueueItem;
