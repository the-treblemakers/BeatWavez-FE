import React  from "react";
import ChatList from './ChatList';
import PropTypes from 'prop-types';
import { TextField, Button, Grid } from '@material-ui/core';

const Chat = ({ messageArray, setNewMessage, handleNewMessage, newMessage }) => {
    // const [newMessage, setNewMessage] = useState('');
    // const [stageName, setStageName] = useState('');
    // const [messageArray, setMessageArray] = useState([]);

    // useEffect(() => {
    //     socket.on('MESSAGE', (message) => {
    //         setMessageArray([...messageArray, message]);
    //     });

    // }, [newMessage, stageName, messageArray]);

    // const handleNewMessage = () => {
    //     socket.emit('MESSAGE', { message: newMessage, stageName, timeStamp: new Date() });
    //     setNewMessage('');
    // };


    return (
        <Grid container
            direction="column" 
            alignItems="center" 
            justify="center">
            <ChatList 
                messageArray={messageArray} />
            <Grid container
                direction="row"
                alignItems="center" 
                justify="center">
                <TextField 
                    variant="filled" 
                    label="message"
                    fullWidth
                    style={{ marginBottom: '1em' }}
                    value={newMessage} 
                    onChange={({ target }) => setNewMessage(target.value)} />

                <Button 
                    name="send message"
                    size="small"
                    color="primary"
                    style={{ marginBottom: '1em' }}
                    onClick={handleNewMessage}>
                    Send Message
                </Button>
            </Grid>
        </Grid>
    );
};

Chat.propTypes = {
    messageArray: PropTypes.array.isRequired,
    setNewMessage: PropTypes.func.isRequired,
    handleNewMessage: PropTypes.func.isRequired,
    newMessage: PropTypes.string.isRequired,
    
};

export default Chat;
