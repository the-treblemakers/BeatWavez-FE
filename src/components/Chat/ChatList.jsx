import React from "react";
import PropTypes from "prop-types";
import ChatMsg from './ChatMsg';
import { List, ListItem } from '@material-ui/core';

const ChatList = ({ messageArray }) => {

    return (
        <>
            <List 
                aria-label='chat' 
                style={{ maxHeight: 300, overflow: 'auto' }}>
                {messageArray.map((msg, i) => (
                    <ListItem key={msg.message + i}>
                        <ChatMsg {...msg} />
                    </ListItem>
                ))}
            </List>
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
