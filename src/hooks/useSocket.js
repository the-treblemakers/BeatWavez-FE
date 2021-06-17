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
        });

        socket.on('REQUEST_HOST', ({ sender }) => {
            if (host.isHost) {
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

        // socket.on('HOST', ({ hostId, sender }) => {
        //     if (!hostId && host !== '') {
        //         socket.emit('HOST', { hostId: host, sender });
        //         console.log(host, 'HOST new');
        //     } else if (host === '' && hostId) {
        //         setHost(hostId);
        //         socket.emit('SONG_QUEUE', { queue, hostId });
        //         console.log(host, 'HOST queue');
        //     }

        // });

        // socket.on('SONG_QUEUE', ({ queueRequest, sender }) => {
        //     if (queueRequest.length === 0 && queue.length !== 0) {
        //         socket.emit('SONG_QUEUE', { queue, hostId: sender });
        //         console.log(queueRequest, sender, 'QUEUE newFE');
        //     } else if (queueRequest === 1 && sender !== host) {
        //         setQueue(...queue, queueRequest);
        //         socket.emit('SONG_QUEUE', { queue, hostId: host, roomName: roomInfo.roomName });
        //         console.log(queueRequest, sender, 'QUEUE songFE');
        //     } else if (sender === host && queueRequest.length !== 0) {
        //         setQueue(queueRequest); console.log(queueRequest, sender, 'QUEUE allFE');
        //     }

        // });
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
        socket.emit('MESSAGE', { message: newMessage, timeStamp: new Date(), ...roomInfo });
        setNewMessage('');
    };

    const handleAddToQueue = (song) => {
        console.log(song);
        if (!host.isHost) {
            console.log(roomInfo.stageName, 'REQ ADD');
            socket.emit('ADD_TO_QUEUE', ({ title: song.title, vidId: song.vidId, stageName: roomInfo.stageName, thumbnail: song.thumbnail, hostId: host.hostId }));
        } else if (host.isHost) {
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
