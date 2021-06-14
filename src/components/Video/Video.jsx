import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography } from '@material-ui/core';
import VideoControls from './VideoControls';
import ReactPlayer from 'react-player';
 

const Video = ({ embedId, stagename, onPrevious, onPlay, onNext, onFullscreen, playing, videoRef }) => {
    
   
    return  (
        <Card>
            <div className="video-responsive">
                <CardContent>
                    <Typography  variant="h6">now on stage: {stagename}</Typography>
                    <ReactPlayer
                        url={`https://www.youtube-nocookie.com/embed/${embedId}?rel=0&controls=0`}
                        playing={playing}
                        ref={videoRef} />
                       
                </CardContent>
                <VideoControls 
                    onPrevious={onPrevious} 
                    onPlay={onPlay} 
                    onNext={onNext}
                    onFullscreen={onFullscreen}/>
            </div>
        </Card>
    );
};

Video.propTypes = {
    embedId: PropTypes.string.isRequired,
    stagename: PropTypes.string.isRequired,
    onPrevious: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onFullscreen: PropTypes.func.isRequired,
    playing: PropTypes.bool.isRequired,
    videoRef: PropTypes.object.isRequired
};

export default Video;
