import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography, IconButton, Icon } from '@material-ui/core';
import VideoControls from './VideoControls';

const Video = ({ title, embedId, stagename, onPrevious, onPlay, onNext, onFullscreen }) => {
    // const [playingVideo, setPlayingVideo] = useState(false)
    const videoRef = useRef(null);

    useEffect(() => {
        const videoEl = videoRef.current
        console.log(videoEl)
    }, []);

    const playKey = () => {
        window.addEventListener('keydown', (e) => {
            console.log(e)
        })

        window.dispatchEvent(new KeyboardEvent('keydown', {
            'key': 'k'
        }))
    }

    const handlePlay = () => {
        console.log('play/pause')
        videoRef.current.playKey();
    }


    return(
        <Card>
            <div className="video-responsive">
                <CardContent>
                    <Typography  variant="h6">now on stage: {stagename}</Typography>
                    <iframe
                        ref={videoRef}
                        width="100%"
                        height="auto"
                        src={`https://www.youtube-nocookie.com/embed/${embedId}?rel=0&controls=0`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={title}
                    />
                </CardContent>
                <VideoControls 
                    onPrevious={onPrevious} 
                    onPlay={handlePlay} 
                    onNext={onNext}
                    onFullscreen={onFullscreen}/>
            </div>
        </Card>
    )
};

Video.propTypes = {
    title: PropTypes.string.isRequired,
    embedId: PropTypes.string.isRequired,
    stagename: PropTypes.string.isRequired,
    onPrevious: PropTypes.func.isRequired,
    // onPlay: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onFullscreen: PropTypes.func.isRequired,
};

export default Video;
