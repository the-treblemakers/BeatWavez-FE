import React from "react";
import PropTypes from "prop-types";
import { Typography, Grid } from '@material-ui/core';

const ChatMsg = ({ stageName, message, timeStamp }) => (
    <Grid container
        direction="row" 
        justify="space-between"
        alignItems="flex-end"
        spacing={1}>
        <Grid item>
            <Grid container
                direction="row" 
                justify="flex-start"
                spacing={1}>
            </Grid>
            <Grid item>
                <Typography 
                    variant="body1"
                    align="left" 
                    style={{ fontWeight: 500, }}>
                    {stageName}:
                </Typography>
            </Grid>
            <Grid item>        
                <Typography 
                    variant="body1"
                    align="left">
                    {message}
                </Typography>
            </Grid>
        </Grid>
        <Grid item>
            <Typography 
                variant="body1" 
                align="right"
                style={{ fontSize: 12, }}>{timeStamp}</Typography>
        </Grid>
    </Grid>
);

ChatMsg.propTypes = {
    stageName: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
};

export default ChatMsg;
