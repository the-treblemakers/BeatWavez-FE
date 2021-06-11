import React from "react";
import PropTypes from "prop-types";
import ChatMsg from './ChatMsg';

const Chat = ({ chatMsgs }) => (
    <ul aria-label='chat'>
        {chatMsgs.map((msg) => (
            <li key={msg.message}>
                <ChatMsg {...msg} />
            </li>
        ))}
    </ul>
);

Chat.propTypes = {
    chatMsgs: PropTypes.arrayOf(
        PropTypes.shape({
            stageName: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
        })
    )
};


export default Chat;
