import { SettingsInputSvideoRounded } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import ChatList from "../components/Chat/ChatList";
import io from "socket.io-client";

// const socket = io('http://localhost:7890/');
const socket = io('https://beatwavez-dev.herokuapp.com/');

// pass in name prop to attach to message
// can add timestamp with new Date() at time in message handler
const TestRoom = () => {
    const [newMessage, setNewMessage] = useState('');
    const [stageName, setStageName] = useState('');
    const [messageArray, setMessageArray] = useState([]);

    useEffect(() => {
        socket.on('MESSAGE', (message) => {
            setMessageArray([...messageArray, message]);
        });

    }, [newMessage, stageName, messageArray]);

    const handleNewMessage = () => {
        socket.emit('MESSAGE', { message: newMessage, stageName, timeStamp: new Date() });
        setNewMessage('');
    };

    return (
        <div>
            <h1>TESTING</h1>
            <input type="text" value={stageName} placeholder="Enter Stage Name" onChange={({ target }) => setStageName(target.value)} />
            <ChatList messageArray={messageArray} />
            <input type="text" value={newMessage} onChange={({ target }) => setNewMessage(target.value)} />
            <button onClick={handleNewMessage}>Send Message</button>
        </div>

    );
};

export default TestRoom;
