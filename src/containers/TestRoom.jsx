import { SettingsInputSvideoRounded } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import ChatList from "../components/chat/ChatList";
// import io from "socket.io-client";

// const socket = io('http://localhost:4001/');

// pass in name prop to attach to message
// can add timestamp with new Date() at time in message handler
//
const TestRoom = () => {
    // const [newMessage, setNewMessage] = useState('');
    // const [stageName, setStageName] = useState('');
    // const [messageArray, setMessageArray] = useState([]);

    // useEffect(() => {
    //     socket.on('MESSAGE', (message) => {
    //         setMessageArray([...messageArray, message]);
    //     });

    //     return () => {
    //         socket.disconnect();
    //     };
    // }, [newMessage, stageName, messageArray]);

    // const handleNewMessage = () => {
    //     socket.emit('MESSAGE', { newMessage, stageName, timeStamp: 'TIME' });
    //     setNewMessage('');
    // };

    return (
        <div>
            <h1>TESTING</h1>
            {/* <input type="text" value={stageName} placeholder="Enter Stage Name" onChange={({ target }) => setStageName(target.value)} />
            <ChatList messageArray={messageArray} />
            <input type="text" value={newMessage} onChange={({ target }) => setNewMessage(target.value)} />
            <button onClick={handleNewMessage}>Send Message</button> */}
        </div>

    );
};

export default TestRoom;


// const sendMessage = () => {
//     // socket.emit('SEND_MESSAGE', newMessage);

//     setNewMessage('');
// };

// useEffect(() => {
//     // socket.on('SEND_MESSAGE', (newMessage) => {
//     //     setMessageArray(...messageArray, newMessage);
//     // });
// }, []);
