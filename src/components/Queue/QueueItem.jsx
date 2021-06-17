import React from "react";
<<<<<<< HEAD
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";


const QueueItem = ({ title, stageName }) => (
    
    <Typography variant='p'>
        {stageName}: {title}
    </Typography>
    
=======
import PropTypes from "prop-types"
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
>>>>>>> e85fa1aee9ae7645b8ec08d15ba164e0bc1d431d
);

QueueItem.propTypes = {
    title: PropTypes.string.isRequired,
    stageName: PropTypes.string.isRequired,
};

export default QueueItem;
