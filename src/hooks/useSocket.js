// import { SettingsInputSvideoRounded } from "@material-ui/icons";
// import { TextField, Button, Grid } from '@material-ui/core';
import React, { useState, useEffect } from "react";
// import LoginForm from "../components/UI/LoginForm";
// import ChatList from "../components/Chat/ChatList";
import io from "socket.io-client";

const socket = io('http://localhost:7890/');
// const socket = io('https://beatwavez-dev.herokuapp.com/');

export const useSocket = () => {
    const [newMessage, setNewMessage] = useState('');
    const [messageArray, setMessageArray] = useState([]);  // *
    const [roomInfo, setRoomInfo] = useState({ stageName: '', roomName: '' });  // *
    const [roomSelect, setRoomSelect] = useState(true);

    useEffect(() => {
        socket.on('MESSAGE', (message) => {
            setMessageArray([...messageArray, message]);
        });


    }, [roomInfo, messageArray]);

    useEffect(() => {

        return () => {
            console.log('disconnect fire');
            socket.disconnect();
        };

    }, []);

    const handleCreateRoom = (stageName, roomName) => {
        if (stageName !== '' && roomName !== '') {
            socket.emit('CREATE_ROOM', ({ stageName, roomName }));
            setRoomInfo({ stageName, roomName });
            setRoomSelect(false);
        } else {
            alert('Enter Room & Stage Name to continue.');
        }
    };

    const handleJoinRoom = (stageName, roomName) => {
        if (stageName !== '' && roomName !== '') {
            socket.emit('JOIN_ROOM', ({ stageName, roomName }));
            setRoomInfo({ stageName, roomName });
            setRoomSelect(false);
        } else {
            alert('Enter Room & Stage Name to continue.');
        }
    };

    const handleNewMessage = () => {
        socket.emit('MESSAGE', { message: newMessage, timeStamp: new Date(), ...roomInfo });
        setNewMessage('');
    };

    // if (roomSelect) return (
    //     <div>
    //         <h1>TESTING</h1>
    //         <LoginForm
    //             handleCreateRoom={handleCreateRoom}
    //             handleJoinRoom={handleJoinRoom}
    //         />
    //     </div >
    // );
    // 
    //     return (
    //         <>
    //             <div>
    //                 <h1>TESTING</h1>
    //                 <h3>{roomInfo.roomName} - {roomInfo.stageName}</h3>
    //                 {/* <input type="text" value={stageName} placeholder="Enter Stage Name" onChange={({ target }) => setStageName(target.value)} /> */}
    //                 <ChatList messageArray={messageArray} />
    //                 <input type="text" value={newMessage} onChange={({ target }) => setNewMessage(target.value)} />
    //                 <button onClick={handleNewMessage}>Send Message</button>
    //             </div>
    //         </>
    //     );

    return {
        handleJoinRoom,
        handleCreateRoom,
        handleNewMessage,
        roomInfo,
        messageArray,
        newMessage
    };
};
