import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Grid } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import FullscreenOutlinedIcon from '@material-ui/icons/FullscreenOutlined';

const VideoControls = ({ onPrevious, onPlay, onNext, onFullscreen }) => (
    <Grid
        container
        justify="center"
        alignItems="center"
        direction="row">
        <Grid item>
            <IconButton aria-label="previous" onClick={onPrevious}>
                <SkipPreviousOutlinedIcon />
            </IconButton>
        </Grid>
        <Grid item>
            <IconButton aria-label="play pause" onClick={onPlay}>
                <PlayCircleOutlineIcon />
            </IconButton>
        </Grid>
        <Grid item>
            <IconButton aria-label="next" onClick={onNext}>
                <SkipNextOutlinedIcon />
            </IconButton>
        </Grid>
        <Grid item>
            <IconButton aria-label="next" onClick={onFullscreen}>
                <FullscreenOutlinedIcon />
            </IconButton>
        </Grid>
    </Grid>
);


VideoControls.propTypes = {
    onPrevious: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onFullscreen: PropTypes.func.isRequired,
};

export default VideoControls;
