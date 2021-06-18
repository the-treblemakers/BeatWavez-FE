import React from "react";
import PropTypes from "prop-types";
import ChatMsg from './ChatMsg';
import { List, ListItem } from '@material-ui/core';
import { useStyles } from '../Styles/messageStyles';

const ChatList = ({ messageArray }) => {
    const classes = useStyles();

    return (
        <>
            <List 
                aria-label='chat' 
                style={{ maxHeight: 300, width: "100%", overflow: 'auto' }}>
                {messageArray.map((msg, i) => (
                    <ListItem 
                        className={classes.message}
                        key={msg.message + i}>
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
