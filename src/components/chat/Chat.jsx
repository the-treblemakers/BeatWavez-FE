import React, { useState, useEffect } from "react";
import ChatList from './ChatList';
// import { Socket } from "socket.io-client";

// const socket = io.connect('http://localhost:7890');

const Chat = () => {
    const [newMessage, setNewMessage] = useState({ message: '', name: '' });
    const [messageArray, setMessageArray] = useState([]);

    const sendMessage = () => {
        // socket.emit('SEND_MESSAGE', newMessage);

        setNewMessage('');
    };

    useEffect(() => {
        // socket.on('SEND_MESSAGE', (newMessage) => {
        //     setMessageArray(...messageArray, newMessage);
        // });
    }, []);



    return (
        <>
            <ChatList messageArray={messageArray} />
            <input type="text" value={newMessage} onChange={({ target }) => setNewMessage(target.value)} />
            <button onClick={sendMessage}>Send Message</button>
        </>
    );
};

export default Chat;
