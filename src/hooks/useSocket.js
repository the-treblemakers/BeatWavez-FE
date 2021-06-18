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
            setMessageArray([...messageArray, { message, stageName, timeStamp: new Date().toLocaleTimeString() }]);
        });

        socket.on('UPDATE_ROOMS_ARRAY', ({ roomsResults }) => {
            setRoomsArray(roomsResults);
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


// return () => {
//     console.log('disconnect fire');
//     socket.disconnect();
// };

// socket.on('SET_HOST', ({ hostId }) => {
//     setHost({ hostId, isHost: true });
//     console.log('set host', hostId);
// });

// // After joining the room, this goes to room
// socket.on('REQUEST_HOST', ({ sender }) => {
//     if (host.isHost) {
//         socket.emit('SEND_HOST', ({ hostId: host.hostId, queue, sender }));
//         console.log('request host', host);
//     }
// });

// socket.on('RECEIVE_HOST_QUEUE', ({ hostId, queue }) => {
//     setHost({ hostId, isHost: false });
//     setQueue(queue);
//     console.log('receive queue host', hostId);
// });

// socket.on('ADD_TO_QUEUE', ({ title, vidId, stageName, thumbnail }) => {
//     setQueue([...queue, { title, vidId, stageName, thumbnail }]);
//     console.log('update queue');
//     socket.emit('UPDATE_QUEUE', { queue, roomName: roomInfo.roomName });
// });

// socket.on('UPDATE_QUEUE', ({ queue }) => {
//     setQueue(queue);
// });

// console.log('host', host);
// if (!host.isHost) {
//     console.log(roomInfo.stageName, 'REQ ADD');
//     socket.emit('ADD_TO_QUEUE', ({ title: song.title, vidId: song.vidId, stageName: roomInfo.stageName, thumbnail: song.thumbnail, hostId: host.hostId }));
// } else if (host.isHost) {
//     console.log(roomInfo.stageName, 'HOST ADD');
//     setQueue([...queue, { title: song.title, vidId: song.vidId, stageName: roomInfo.stageName, thumbnail: song.thumbnail, hostId: host.hostId }]);
//     socket.emit('UPDATE_QUEUE', { queue, roomName: roomInfo.roomName });
// }
