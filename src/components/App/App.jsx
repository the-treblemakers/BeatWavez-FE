import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../UI/NavBar';
import Home from '../../containers/Home';
import GreenRoom from '../../containers/GreenRoom';
import PartyRoom from '../../containers/PartyRoom';
import About from '../../containers/About';
import '../Styles/app.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import theme from '../Styles/theme';
import { useSocket } from '../../hooks/useSocket';

export default function App() {
    const {
        handleCreateRoom,
        handleNewMessage,
        handleAddToQueue,
        handleJoinRoom,
        setNewMessage,
        // messageArray,
        roomsArray,
        // queueArray,
        newMessage,
        roomInfo,
    } = useSocket();

    const messageArray = [
        {
            stageName: "soraya",
            message: "hi",
            timeStamp: "11:30pm",
        },
        {
            stageName: "jordass",
            message: "yikes!",
            timeStamp: "11:30pm"
        },
        {
            stageName: "thanos",
            message: "asdfjlkdfsajkfdl;sa",
            timeStamp: "11:31pm",
        },
        {
            stageName: "layla",
            message: "ah my EARS",
            timeStamp: "11:31pm"
        },
        {
            stageName: "hardeep",
            message: "ok bye",
            timeStamp: "11:32pm"
        },
    ]

    const queueArray = [
        {
            title: "Radiohead - No Surprises - Karaoke Version from Zoom Karaoke",
            stageName: "soraya",
        },
        {
            title: "Lost In The Woods - Frozen 2 Soundtrack - Karaoke Version from Zoom Karaoke",
            stageName: "jordass",
        },
        {
            title: "YEBBA - My Mind - Acoustative Piano Karaoke Version from Zoom Karaoke",
            stageName: "thanos",
        },
        {
            title: "Bishop Briggs - River - Karaoke Version from Zoom Karaoke",
            stageName: "hardeep",
        },
        {
            title: "Mamma Mia 2 - I&#39;ve Been Waiting For You - Karaoke Version from Zoom Karaoke",
            stageName: "layla",
        },
    ];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <Switch>
                <Route path="/" exact render={(routerProps) => <Home {...routerProps}
                    handleCreateRoom={handleCreateRoom}
                    handleJoinRoom={handleJoinRoom}
                    roomsArray={roomsArray}
                />} />
                <Route path="/greenroom" render={(routerProps) => <GreenRoom {...routerProps}
                    roomInfo={roomInfo}
                    messageArray={messageArray}
                    newMessage={newMessage}
                    queue={queueArray}
                    setNewMessage={setNewMessage}
                    handleNewMessage={handleNewMessage}
                    handleAddToQueue={handleAddToQueue}
                />} />
                <Route path="/partyroom" render={(routerProps) => <PartyRoom {...routerProps}
                    roomInfo={roomInfo}
                    messageArray={messageArray}
                    queueArray={queueArray}
                />} />
                <Route path="/about" render={(routerProps) => <About {...routerProps} />} />
            </Switch>
        </ThemeProvider>
    );
}
