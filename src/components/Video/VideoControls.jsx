import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Grid } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import FullscreenOutlinedIcon from '@material-ui/icons/FullscreenOutlined';

const VideoControls = ({ onPrevious, onPlay, onNext, onFullscreen, queue, queueIndex }) => (
    <Grid
        container
        justify="center"
        alignItems="center"
        direction="row">
        <Grid item>
            <IconButton 
                aria-label="previous" 
                onClick={onPrevious} 
                disabled={queueIndex === 0 }>
                <SkipPreviousOutlinedIcon />
            </IconButton>
        </Grid>
        <Grid item>
            <IconButton 
                aria-label="play pause" 
                onClick={onPlay}>
                <PlayCircleOutlineIcon />
            </IconButton>
        </Grid>
        <Grid item>
            <IconButton 
                aria-label="next" 
                onClick={onNext} 
                disabled={queue.length === 0 || queueIndex + 1 === queue.length}>
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
    queue: PropTypes.array.isRequired,
    queueIndex: PropTypes.number.isRequired,
};

export default VideoControls;
