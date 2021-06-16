import React from "react";
import PropTypes from "prop-types";
import ChatMsg from './ChatMsg';

const ChatList = ({ messageArray }) => {

    return (
        <>
            <ul aria-label='chat'>
                {messageArray.map((msg, i) => (
                    <li key={msg.message + i}>
                        <ChatMsg {...msg} />
                    </li>
                ))}
            </ul>
        </>
    );
};

ChatList.propTypes = {
    messageArray: PropTypes.arrayOf(
        PropTypes.shape({
            stageName: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
        })
    )
};


export default ChatList;
