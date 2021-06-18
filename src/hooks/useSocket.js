import { useState, useEffect, } from "react";
import { useHistory } from 'react-router-dom';
import io from "socket.io-client";

// const socket = io('http://localhost:7890/');
const socket = io('https://beatwavez-dev.herokuapp.com/');

export const useSocket = () => {
    const [roomInfo, setRoomInfo] = useState({ stageName: '', roomName: '', isHost: false });
    const [queueArray, setQueueArray] = useState([]);
    const [roomsArray, setRoomsArray] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [messageArray, setMessageArray] = useState([]);
    const history = useHistory();

    useEffect(() => {
        socket.on('MESSAGE', ({ sender, message }) => {
            setMessageArray([...messageArray, message]);
            console.log(messageArray);
        });

        socket.on('ROOM_JOIN_RESULT', ({ roomJoined, stageName, roomName, isHost }) => {
            if(roomJoined) {
                setRoomInfo({ roomName, stageName, isHost });
                history.push('/greenroom');
            } else {
                alert('Provided roomname or passcode is incorrect.');
            }
        });

        socket.on('UPDATE_QUEUE_ARRAY', ({ queueArray }) => {
            setQueueArray(queueArray);
        });

        socket.on('UPDATE_MESSAGE_ARRAY', ({ message, timeStamp, stageName }) => {
            setMessageArray([...messageArray, { message, timeStamp, stageName }]);
        });

    }, []);

    const handleCreateRoom = (stageName) => {
        if(stageName !== '') {
            socket.emit('CREATE_ROOM', ({ stageName }));
        }
    };

    const handleJoinRoom = (stageName, roomName, inputPasscode) => {
        if(stageName !== '' && roomName !== '') {
            socket.emit('JOIN_ROOM', ({ stageName, roomName, inputPasscode }));
        }
    };

    const handleNewMessage = () => {
        socket.emit('MESSAGE', { message: newMessage, timeStamp: new Date().toLocaleTimeString(), roomName: roomInfo.roomName, stageName: roomInfo.stageName });
        setNewMessage('');
        console.log(messageArray, queue, 'CHECK MESSAGE & QUEUE');
    };

    const handleAddToQueue = ({ title, vidId, thumbnail }) => {
        socket.emit('ADD_TO_QUEUE', ({ title, vidId, thumbnail, stageName: roomInfo.stageName, roomName: roomInfo.roomName }));
    };

    return {
        handleCreateRoom,
        handleNewMessage,
        handleAddToQueue,
        handleJoinRoom,
        setRoomsArray,
        setNewMessage,
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
