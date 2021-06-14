import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core'
import { SkipPreviousIcon, PlayArrowIcon, SkipNextIcon } from "@material-ui/icons";

const VideoControls = ({ onPreviousClick, onPlay, onNextClick }) => (
        <div>
            <IconButton aria-label="previous" onClick={onPreviousClick}>
                <SkipPreviousIcon />
            </IconButton>
            <IconButton aria-label="play pause" onClick={onPlay}>
                <PlayArrowIcon />
            </IconButton>
            <IconButton aria-label="next" onClick={onNextClick}>
                <SkipNextIcon />
            </IconButton>
        </div>
);


VideoControls.propTypes = {
    onPreviousClick: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired,
    onNextClick: PropTypes.func.isRequired,
}

export default VideoControls;
