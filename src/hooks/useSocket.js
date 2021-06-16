import { useState, useEffect } from "react";
import generateRoomNames from '../RoomNames/generateRoomNames.js';
import io from "socket.io-client";

const socket = io('http://localhost:7890/');
// const socket = io('https://beatwavez-dev.herokuapp.com/');

export const useSocket = () => {
    const [newMessage, setNewMessage] = useState('');
    const [messageArray, setMessageArray] = useState([]);
    const [roomInfo, setRoomInfo] = useState({ stageName: '', roomName: '' });
    const [queue, setQueue] = useState([]);
    const [host, setHost] = useState('');

    useEffect(() => {
        socket.on('MESSAGE', (message) => {
            setMessageArray([...messageArray, message]);
        });

        socket.on('HOST', (hostId, sender) => {
            if (!hostId && host !== '') {
                socket.emit('HOST', host, sender);
            } else if (host === '' && hostId) {
                setHost(hostId);
                socket.emit('SONG_QUEUE', queue, hostId);
            }
            console.log(host, 'HOST');
        });

        socket.on('SONG_QUEUE', (queueRequest, sender) => {
            if (queueRequest.length === 0 && queue.length !== 0) {
                socket.emit('SONG_QUEUE', queue, sender);
            } else if (queueRequest === 1 && sender !== host) {
                setQueue(...queue, queueRequest);
                socket.emit('SONG_QUEUE', queue, host, roomInfo.roomName);
            } else if (sender === host) {
                setQueue(queueRequest);
            }
        });
    }, [roomInfo, messageArray, host, queue]);

    // add SONG_QUEUE socket event for queue add button (sends song as queue, host as hostId)
    // decide if host can be used outside of hook (maybe to determine song/queue controls)
    // check room availability logic and create_room insert/add delete on host disconnnect

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
        socket.emit('MESSAGE', { message: newMessage, timeStamp: new Date().toLocaleTimeString(), ...roomInfo });
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
