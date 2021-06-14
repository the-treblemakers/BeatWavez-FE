import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { SkipPreviousIcon, PlayArrowIcon, SkipNextIcon } from "@material-ui/icons";
// import VideoControls from './VideoControls';

const Video = ({ embedId, stagename, onPreviousClick, onPlay, onNextClick }) => (
    <Card>
        <div className="video-responsive">
            <CardContent>
                <Typography  variant="h6">now on stage: {stagename}</Typography>
                <iframe
                    width="100%"
                    height="auto"
                    src={`https://www.youtube-nocookie.com/embed/${embedId}?rel=0&controls=0`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </CardContent>
            <div>
                <Button aria-label="previous" onClick={onPreviousClick}>
                    previous
                </Button>
                <Button aria-label="play pause" onClick={onPlay}>
                    play
                </Button>
                <Button aria-label="next" onClick={onNextClick}>
                    next
                </Button>
            </div>
            {/* <VideoControls onPreviousClick={onPreviousClick} onPlay={onPlay} onNextClick={onNextClick}/> */}
        </div>
    </Card>
);

Video.propTypes = {
    embedId: PropTypes.string.isRequired,
    stagename: PropTypes.string.isRequired,
    onPreviousClick: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired,
    onNextClick: PropTypes.func.isRequired,
};

export default Video;
