import React from "react";
import PropTypes from "prop-types";

const ChatMsg = ({ stageName, message, timeStamp }) => (
    <>
        <div>{timeStamp} {stageName}: {message}</div>
    </>
);

ChatMsg.propTypes = {
    stageName: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
};

export default ChatMsg;
