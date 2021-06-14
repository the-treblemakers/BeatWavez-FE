import React, { useState, useEffect } from 'react';
import Video from '../components/Video/Video';
import ChatList from '../components/chat/ChatList';
import { Grid, Typography } from '@material-ui/core';

const PartyRoom = () => {
    const [roomName, setRoomName] = useState('Frosty Darkness');
    const [stagename, setStagename] = useState('');
    const [embedId, setEmbedId] = useState('');
    const [title, setTitle] = useState('');
    const [queueIndex, setQueueIndex] = useState(0);
    // const [messages, setMessages] = useState('');
    // const [queue, setQueue] = useState([]);

    const chatMessages = [
        {
            stageName: 'soraya',
            message: 'hi',
            timeStamp: 'noon'
        },
        {
            stageName: 'nicole',
            message: 'hi',
            timeStamp: 'noon.1'
        },
        {
            stageName: 'soraya',
            message: 'AHH',
            timeStamp: 'noon.2'
        },
    ];
    const queue = [
        {
            id: 1,
            stagename: 'Cher',
            title: "Radiohead - No Surprises - Karaoke Version from Zoom Karaoke",
            vidId: 'H8cNOHKKx7U'
        },
        {
            id: 2,
            stagename: 'Queen',
            title: "Lost In The Woods - Frozen 2 Soundtrack - Karaoke Version from Zoom Karaoke",
            vidId: 'GeEVHGtuZ68'
        },
        {
            id: 3,
            stagename: 'Brittany',
            title: "YEBBA - My Mind  - Acoustative Piano Karaoke Version from Zoom Karaoke",
            vidId: 'Q_jmz2oFCJM'
        },
    ];

    useEffect(() => {
        setStagename(queue[queueIndex].stagename)
        setEmbedId(queue[queueIndex].vidId)
        setTitle(queue[queueIndex].title)
    }, [queueIndex])

    const handlePrevious = () => {
        setQueueIndex((queueIndex - 1))
        //add button disable
    }
    
    // const handlePlay = () => {
        //     console.log('play/pause')
        // }
        
        const handleNext = (i) => {
        setQueueIndex((queueIndex + 1))
        //add button disable
    }

    const handleFullscreen = () => {
        console.log('fullscreen')
    }

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
                </Typography>
                <Grid item>
                    <Video 
                        title={title}
                        embedId={embedId} 
                        stagename={stagename}
                        onPrevious={handlePrevious}
                        // onPlay={handlePlay}
                        onNext={handleNext}
                        onFullscreen={handleFullscreen} />
                </Grid>
                <Grid item style={{ border: '1px solid #000' }}>
                    <ChatList messageArray={chatMessages} />
                </Grid>
            </Grid>
        </div>
    );
};

export default PartyRoom;



