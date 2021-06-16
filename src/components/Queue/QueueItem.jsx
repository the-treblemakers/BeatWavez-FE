import React from "react";
import PropTypes from "prop-types";
import { Typography, Grid } from '@material-ui/core';

const QueueItem = ({ title, stageName }) => (
    <Grid container 
        direction="row" 
        justify="flex-start" 
        alignItems="center">
        <Typography variant="body1" align="left">{stageName}: </Typography>
        <Typography variant="body1" align="left">{title}</Typography>
    </Grid>
);

QueueItem.propTypes = {
    title: PropTypes.string.isRequired,
    stageName: PropTypes.string.isRequired,
};

export default QueueItem;
