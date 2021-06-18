import React, { useState, useEffect, useRef } from 'react';
import Video from '../components/Video/Video';
import ChatList from '../components/Chat/ChatList';
import { Grid, Typography } from '@material-ui/core';
import screenfull from 'screenfull';
import PropTypes from 'prop-types';
import Queue from '../components/Queue/Queue';
import PartyRoomAccordion from '../components/UI/PartyRoomAccordion';
import { useHistory } from 'react-router-dom';


const PartyRoom = ({ roomInfo, messageArray, queueArray }) => {
    const [roomName, setRoomName] = useState(roomInfo.roomName);
    const [stageName, setStageName] = useState('');
    const [embedId, setEmbedId] = useState('');
    const [queueIndex, setQueueIndex] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [messages, setMessages] = useState(messageArray);
    const [queue, setQueue] = useState(queueArray);

    const history = useHistory();
    const videoRef = useRef(null);

    useEffect(() => {
        // setMessages(messageArray);
        if (roomInfo.stageName === '' || roomInfo.roomName === '') {
            return <>{history.push('/')}</>;
        } else if (queue.length === 0) {
            setMessages(messageArray);
            setQueue(queueArray);
        } else {
            setStageName(queue[queueIndex].stageName);
            setEmbedId(queue[queueIndex].vidId);
            setMessages(messageArray);
            setQueue(queueArray);
        }

    }, [queueIndex, messageArray, queueArray]);

    const handlePrevious = () => {
        setQueueIndex((queueIndex - 1));
    };

    const handleNext = () => {
        setQueueIndex((queueIndex + 1));
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
                justify="space-between"
                alignItems="center"
                direction="column"
                style={{ minHeight: '93.5vh' }}>

                <Grid item>
                    <Typography
                        variant="h2"
                        align="center"
                        style={{ margin: '1.5rem' }}>
                        {roomName} Room
                    </Typography>
                </Grid>
                <Grid item>
                    <Video
                        embedId={embedId}
                        stageName={stageName}
                        onPrevious={handlePrevious}
                        onPlay={handlePlay}
                        onNext={handleNext}
                        onFullscreen={handleFullscreen}
                        playing={playing}
                        videoRef={videoRef}
                        queue={queue}
                        queueIndex={queueIndex} />

                </Grid>
                <Grid item>
                    <PartyRoomAccordion
                        messages={messages}
                        queue={queue} />
                </Grid>
            </Grid>
        </div>
    );
};

PartyRoom.propTypes = {
    roomInfo: PropTypes.object.isRequired,
    messageArray: PropTypes.array.isRequired,
    queueArray: PropTypes.array.isRequired,
};

export default PartyRoom;
