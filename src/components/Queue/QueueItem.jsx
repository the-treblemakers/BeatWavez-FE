import React from "react";
import PropTypes from "prop-types";

const QueueItem = ({ title, stageName }) => (
    <>
        <p>{stageName}: {title}</p>
    </>
);

QueueItem.propTypes = {
    title: PropTypes.string.isRequired,
    stageName: PropTypes.string.isRequired,
};

export default QueueItem;
