import { SettingsInputSvideoRounded } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import LoginForm from "../components/UI/LoginForm";
import ChatList from "../components/Chat/ChatList";
import io from "socket.io-client";

// const socket = io('http://localhost:7890/');
const socket = io('https://beatwavez-dev.herokuapp.com/');

const TestRoom = () => {
    const [newMessage, setNewMessage] = useState('');
    const [stageName, setStageName] = useState('');
    const [messageArray, setMessageArray] = useState([]);
    const [roomInfo, setRoomInfo] = useState('');

    useEffect(() => {
        socket.on('MESSAGE', (message) => {
            setMessageArray([...messageArray, message]);
        });

    }, [roomInfo, messageArray]);

    const handleCreateRoom = (roomName, stageName) => {
        if (stageName !== '' && roomName !== '') {
            socket.emit('CREATE_ROOM', { stageName, roomName });
            setStageName(stageName);
            setRoomInfo(roomName);
        } else {
            alert('Enter Room & Stage Name to continue.');
        }
    };

    const handleJoinRoom = (roomName, stageName) => {
        if (stageName !== '' && roomName !== '') {
            socket.emit('JOIN_ROOM', { stageName, roomName });
            setStageName(stageName);
            setRoomInfo(roomName);
        } else {
            alert('Enter Room & Stage Name to continue.');
        }
    };

    const handleNewMessage = () => {
        socket.emit('MESSAGE', { message: newMessage, stageName, timeStamp: new Date(), roomInfo });
        setNewMessage('');
    };

    if (roomInfo === '') return (
        <div>
            <h1>TESTING</h1>
            <LoginForm
                handleCreateRoom={handleCreateRoom}
                handleJoinRoom={handleJoinRoom}
            />
        </div>
    );

    return (
        <>
            <div>
                <h1>TESTING</h1>
                {/* <input type="text" value={stageName} placeholder="Enter Stage Name" onChange={({ target }) => setStageName(target.value)} /> */}
                <ChatList messageArray={messageArray} />
                <input type="text" value={newMessage} onChange={({ target }) => setNewMessage(target.value)} />
                <button onClick={handleNewMessage}>Send Message</button>
            </div>
        </>
    );
};

export default TestRoom;
