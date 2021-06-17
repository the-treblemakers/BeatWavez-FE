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
    const [host, setHost] = useState({ hostId: '', isHost: false });

    useEffect(() => {
        socket.on('MESSAGE', (message) => {
            setMessageArray([...messageArray, message]);
        });

        socket.on('SET_HOST', ({ hostId }) => {
            setHost({ hostId, isHost: true });
            console.log('set host', hostId);
        });

        // After joining the room, this goes to room
        socket.on('REQUEST_HOST', ({ sender }) => {
            if(host.isHost) {
                socket.emit('SEND_HOST', ({ hostId: host.hostId, queue, sender }));
                console.log('request host', host);
            }
        });

        socket.on('RECEIVE_HOST_QUEUE', ({ hostId, queue }) => {
            setHost({ hostId, isHost: false });
            setQueue(queue);
            console.log('receive queue host', hostId);
        });

        socket.on('ADD_TO_QUEUE', ({ title, vidId, stageName, thumbnail }) => {
            setQueue([...queue, { title, vidId, stageName, thumbnail }]);
            console.log('update queue');
            socket.emit('UPDATE_QUEUE', { queue, roomName: roomInfo.roomName });
        });

        socket.on('UPDATE_QUEUE', ({ queue }) => {
            setQueue(queue);
        });
        return () => {
            console.log('disconnect fire');
            socket.disconnect();
        };
    }, []);

    // decide if host can be used outside of hook (maybe to determine song/queue controls)
    // check room availability logic and create_room insert/add delete on host disconnnect

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
        console.log('host', host);
        if(!host.isHost) {
            console.log(roomInfo.stageName, 'REQ ADD');
            socket.emit('ADD_TO_QUEUE', ({ title: song.title, vidId: song.vidId, stageName: roomInfo.stageName, thumbnail: song.thumbnail, hostId: host.hostId }));
        } else if(host.isHost) {
            console.log(roomInfo.stageName, 'HOST ADD');
            setQueue([...queue, { title: song.title, vidId: song.vidId, stageName: roomInfo.stageName, thumbnail: song.thumbnail, hostId: host.hostId }]);
            socket.emit('UPDATE_QUEUE', { queue, roomName: roomInfo.roomName });
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
