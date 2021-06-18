import { useState, useEffect, } from "react";
import { useHistory } from 'react-router-dom';
import io from "socket.io-client";

const socket = io('http://localhost:7890/');
// const socket = io('https://beatwavez-dev.herokuapp.com/');

export const useSocket = () => {
    const [roomInfo, setRoomInfo] = useState({ stageName: '', roomName: '', isHost: false, passcode: null });
    const [queueArray, setQueueArray] = useState([]);
    const [roomsArray, setRoomsArray] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [messageArray, setMessageArray] = useState([]);
    const history = useHistory();

    useEffect(() => {
        socket.on('ROOM_JOIN_RESULT', ({ roomJoined, stageName, roomName, isHost, passcode }) => {
            if (roomJoined) {
                setRoomInfo({ roomName, stageName, isHost, passcode });
                history.push('/greenroom');
            } else {
                alert('Provided roomname or passcode is incorrect.');
            }
        });

        socket.on('UPDATE_QUEUE_ARRAY', ({ queueArray }) => {
            setQueueArray(queueArray);
        });

        socket.on('UPDATE_MESSAGE_ARRAY', ({ message, stageName }) => {
            console.log(messageArray, message, stageName, 'UPDATE_MESSAGE');
            setMessageArray((prevMessageArray) => ([...prevMessageArray, { message, stageName, timeStamp: new Date().toLocaleTimeString() }]));
        });

        socket.on('UPDATE_ROOMS_ARRAY', ({ roomsResults }) => {
            if (roomsResults.length === 0) {
                setRoomsArray(['No open rooms, host one!']);
            } else {
                setRoomsArray(roomsResults);
            }
        });

    }, []);

    const handleUpdateRoomsArray = () => {
        socket.emit('UPDATE_ROOMS_ARRAY');
    };

    const handleCreateRoom = () => {
        if (roomInfo.stageName !== '') {
            socket.emit('CREATE_ROOM', ({ stageName: roomInfo.stageName }));
        }
    };

    const handleJoinRoom = (inputPasscode) => {
        if (roomInfo.stageName !== '' && roomInfo.roomName !== '') {
            socket.emit('JOIN_ROOM', ({ stageName: roomInfo.stageName, roomName: roomInfo.roomName, inputPasscode }));
        }
    };

    const handleNewMessage = () => {
        socket.emit('MESSAGE', { message: newMessage, roomName: roomInfo.roomName, stageName: roomInfo.stageName });
        setNewMessage('');
    };

    const handleAddToQueue = ({ title, vidId, thumbnail }) => {
        socket.emit('ADD_TO_QUEUE', ({ title, vidId, thumbnail, stageName: roomInfo.stageName, roomName: roomInfo.roomName }));
    };

    return {
        handleUpdateRoomsArray,
        handleCreateRoom,
        handleNewMessage,
        handleAddToQueue,
        handleJoinRoom,
        setNewMessage,
        setRoomInfo,
        messageArray,
        queueArray,
        roomsArray,
        newMessage,
        roomInfo,
    };
};
