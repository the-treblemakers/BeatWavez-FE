import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";


const QueueItem = ({ title, stageName }) => (
    
    <Typography variant='p'>
        {stageName}: {title}
    </Typography>
    
);

QueueItem.propTypes = {
    title: PropTypes.string.isRequired,
    stageName: PropTypes.string.isRequired,
};

export default QueueItem;
