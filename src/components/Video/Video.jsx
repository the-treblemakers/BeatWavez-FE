import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography, IconButton, Icon } from '@material-ui/core';
import VideoControls from './VideoControls';

const Video = ({ embedId, stagename, onPrevious, onPlay, onNext, onFullscreen }) => (
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
            <VideoControls 
                onPrevious={onPrevious} 
                onPlay={onPlay} 
                onNext={onNext}
                onFullscreen={onFullscreen}/>
        </div>
    </Card>
);

Video.propTypes = {
    embedId: PropTypes.string.isRequired,
    stagename: PropTypes.string.isRequired,
    onPrevious: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onFullscreen: PropTypes.func.isRequired,
};

export default Video;
