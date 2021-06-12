import React, { useState } from 'react';
import Video from '../components/Video/Video';
import ChatList from '../components/chat/ChatList';
import { Grid, Typography } from '@material-ui/core';

const PartyRoom = () => {

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

    const [roomName, setRoomName] = useState('Frosty Darkness');
    // const [messages, setMessages] = useState('');
    // const [queue, setQueue] = useState([]);



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
                <Grid item style={{ border: '1px solid #000' }}>
                    <Video embedId={'CgHNvCUSSvg'} />
                </Grid>
                <Grid item style={{ border: '1px solid #000' }}>
                    <ChatList messageArray={chatMessages} />
                </Grid>

            </Grid>
        </div>
    );
};

export default PartyRoom;



