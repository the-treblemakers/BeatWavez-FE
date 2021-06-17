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
    const [host, setHost] = useState({ hostId: '', isHost: false });

    useEffect(() => {
        socket.on('MESSAGE', (message) => {
            setMessageArray([...messageArray, message]);
        });

        socket.on('SET_HOST', ({ hostId }) => {
            setHost({ hostId, isHost: true });
        });

        socket.on('REQUEST_HOST', ({ sender }) => {
            if(host.isHost) {
                socket.emit('SEND_HOST', ({ hostId: host.hostId, queue, sender }));
            }
        });

        socket.on('RECEIVE_HOST_QUEUE', ({ hostId, queue }) => {
            setHost({ hostId, isHost: false });
            setQueue(queue);
        });

        socket.on('ADD_TO_QUEUE', ({ title, vidId, stageName, thumbnail }) => {
            setQueue([...queue, { title, vidId, stageName, thumbnail }]);
            socket.emit('UPDATE_QUEUE', { queue, roomName: roomInfo.roomName });
        });

        socket.on('UPDATE_QUEUE', ({ queue }) => {
            setQueue(queue);
        });
    }, [roomInfo, messageArray, host, queue]);

    // decide if host can be used outside of hook (maybe to determine song/queue controls)
    // check room availability logic and create_room insert/add delete on host disconnnect

    useEffect(() => {
        return () => {
            console.log('disconnect fire');
            socket.disconnect();
        };
    }, []);

    const handleCreateRoom = (stageName) => {
        if(stageName !== '') {
            const roomName = generateRoomNames();
            socket.emit('CREATE_ROOM', ({ stageName, roomName }));
            setRoomInfo({ stageName, roomName });
        } else {
            // add logic to check for room name (rooms/:id), generate and insert different if exists already
        }
    };

    const handleJoinRoom = (stageName, roomName) => {
        if(stageName !== '' && roomName !== '') {
            socket.emit('JOIN_ROOM', ({ stageName, roomName }));
            setRoomInfo({ stageName, roomName });
        } else {
            // add in message for if room doesn't exist
        }
    };

    const handleNewMessage = () => {
        socket.emit('MESSAGE', { message: newMessage, timeStamp: new Date().toLocaleTimeString(), ...roomInfo });
        setNewMessage('');
    };

    const handleAddToQueue = (song) => {
        console.log(song);
        if(!host.isHost) {
            console.log(roomInfo.stageName, 'REQ ADD');
            socket.emit('ADD_TO_QUEUE', ({ title: song.title, vidId: song.vidId, stageName: roomInfo.stageName, thumbnail: song.thumbnail, hostId: host.hostId }));
        } else if(host.isHost) {
            console.log(roomInfo.stageName, 'HOST ADD');
            setQueue([...queue, { title: song.title, vidId: song.vidId, stageName: roomInfo.stageName, thumbnail: song.thumbnail, hostId: host.hostId }]);
        }

    };

    return {
        handleCreateRoom,
        handleNewMessage,
        handleAddToQueue,
        handleJoinRoom,
        setNewMessage,
        messageArray,
        newMessage,
        roomInfo,
        queue
    };
};
