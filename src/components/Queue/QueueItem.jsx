import React from "react";
import PropTypes from "prop-types";
import { Typography, Grid } from '@material-ui/core';

const QueueItem = ({ title, stageName }) => (
    <Grid container 
        direction="row" 
        justify="flex-start"
        spacing={1}>
        <Grid item>
            <Typography 
                variant="body1" 
                align="left" 
                style={{ fontWeight: 500, }}>{stageName}:</Typography>
        </Grid>
        <Grid item>
            <Typography variant="body1" align="left">{title}</Typography>
        </Grid>
    </Grid>
);

QueueItem.propTypes = {
    title: PropTypes.string.isRequired,
    stageName: PropTypes.string.isRequired,
};

export default QueueItem;
