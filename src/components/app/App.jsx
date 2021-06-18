import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../UI/NavBar';
import Home from '../../containers/Home';
import GreenRoom from '../../containers/GreenRoom';
import PartyRoom from '../../containers/PartyRoom';
import About from '../../containers/About';
import '../styles/app.css';
import { ThemeProvider } from '@material-ui/core';
import theme from '../styles/theme';

import { useSocket } from '../../hooks/useSocket';

export default function App() {
    const {
        handleCreateRoom,
        handleNewMessage,
        handleAddToQueue,
        handleJoinRoom,
        setNewMessage,
        messageArray,
        roomsArray,
        queueArray,
        newMessage,
        roomInfo,
    } = useSocket();

    return (
        <ThemeProvider theme={theme}>
            <Router>
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
            </Router>
        </ThemeProvider>
    );
}
