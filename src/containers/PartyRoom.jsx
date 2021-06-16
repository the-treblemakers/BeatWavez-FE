import React, { useState, useEffect, useRef } from 'react';
import Video from '../components/Video/Video';
import ChatList from '../components/Chat/ChatList';
import { Grid, Typography } from '@material-ui/core';
import screenfull from 'screenfull';
import PropTypes from 'prop-types';
import Queue from '../components/Queue/Queue';

const PartyRoom = ({ roomInfo, messageArray, queueArray }) => {
    const [roomName, setRoomName] = useState(roomInfo.roomName);
    const [stageName, setStageName] = useState('');
    const [embedId, setEmbedId] = useState('');
    const [queueIndex, setQueueIndex] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [messages, setMessages] = useState(messageArray);
    const [queue, setQueue] = useState(queueArray);

    const videoRef = useRef(null);

    useEffect(() => {
        setStageName(queue[queueIndex].stageName);
        setEmbedId(queue[queueIndex].vidId);
        setMessages(messageArray);
        setQueue(queueArray);
    }, [queueIndex, messageArray, queueArray]);

    const handlePrevious = () => {
        setQueueIndex((queueIndex - 1));
        //add button disable
    };

    const handleNext = () => {
        setQueueIndex((queueIndex + 1));
        //add button disable
    };

    const handleFullscreen = () => {
        if (screenfull.isEnabled) {
            screenfull.request(videoRef.current.wrapper);
        }
    };

    const handlePlay = () => {
        if (playing === false) {
            setPlaying(true);
        } else {
            setPlaying(false);
        }

    };

    return (
        <div>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
                style={{ minHeight: '100vh' }}
                spacing={5}>
                <Typography>
                    Room Name: {roomName}
                    Stage Name: {roomInfo.stageName}
                </Typography>
                <Grid item>
                    <Video
                        embedId={embedId}
                        stageName={stageName}
                        onPrevious={handlePrevious}
                        onPlay={handlePlay}
                        onNext={handleNext}
                        onFullscreen={handleFullscreen}
                        playing={playing}
                        videoRef={videoRef} />
                </Grid>
                <Grid item style={{ border: '1px solid #000' }}>
                    <ChatList messageArray={messages} />
                </Grid>
                <Grid item>
                    <Queue queue={queue} />
                </Grid>
            </Grid>
        </div>
    );
};

PartyRoom.propTypes = {
    messageArray: PropTypes.array.isRequired,
    queueArray: PropTypes.array.isRequired,
    roomInfo: PropTypes.object.isRequired,
};

export default PartyRoom;
