import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ChatMsg from './ChatMsg';
import { Socket } from "socket.io-client";

const Chat = () => {
    const [newMessage, setNewMessage] = useState('');
    const [messageArray, setMessageArray] = useState([]);

    const sendMessage = () => {
        socket.emit('SEND_MESSAGE', newMessage);

        setNewMessage('');
    };

    useEffect(() => {
        socket.on('SEND_MESSAGE', (newMessage) => {
            setMessageArray(...messageArray, newMessage);
        });
    }, []);



    return (
        <>
            <ul aria-label='chat'>
                {messageArray.map((msg) => (
                    <li key={msg.message}>
                        <ChatMsg {...msg} />
                    </li>
                ))}
            </ul>
            <input type="text" value={newMessage} onChange={({ target }) => setNewMessage(target.value)} />
            <button onClick={sendMessage}>Send Message</button>
        </>
    );
};

Chat.propTypes = {
    messageArray: PropTypes.arrayOf(
        PropTypes.shape({
            stageName: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
        })
    )
};


export default Chat;
