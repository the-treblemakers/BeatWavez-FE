import { useState, useEffect } from "react";
import generateRoomNames from '../RoomNames/generateRoomNames.js';
import io from "socket.io-client";

// const socket = io('http://localhost:7890/');
const socket = io('https://beatwavez-dev.herokuapp.com/');

export const useSocket = () => {
    const [newMessage, setNewMessage] = useState('');
    const [messageArray, setMessageArray] = useState([]);
    const [roomInfo, setRoomInfo] = useState({ stageName: '', roomName: '' });
    const [queue, setQueue] = useState([]);

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

    const handleCreateRoom = (stageName) => {
        if (stageName !== '') {
            const roomName = generateRoomNames();
            socket.emit('CREATE_ROOM', ({ stageName, roomName }));
            setRoomInfo({ stageName, roomName });
        } else {
            // add logic to check for room name (rooms/:id), generate and insert different if exists already
        }
    };

    const handleJoinRoom = (stageName, roomName) => {
        if (stageName !== '' && roomName !== '') {
            socket.emit('JOIN_ROOM', ({ stageName, roomName }));
            setRoomInfo({ stageName, roomName });
        } else {
            // add in message for if room doesn't exist
        }
    };

    const handleNewMessage = () => {
        socket.emit('MESSAGE', { message: newMessage, timeStamp: new Date(), ...roomInfo });
        setNewMessage('');
    };

    const handleAddToQueue = (song) => {
        setQueue([...queue, { title: song.title, vidId: song.vidId, stageName: roomInfo.stageName }]);
    };

    return {
        handleJoinRoom,
        handleCreateRoom,
        handleNewMessage,
        roomInfo,
        messageArray,
        newMessage,
        setNewMessage,
        handleAddToQueue,
        queue
    };
};
