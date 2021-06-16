import React  from "react";
import ChatList from './ChatList';
import PropTypes from 'prop-types';



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
        <>
            <ChatList 
                messageArray={messageArray} />

            <input 
                type="text" 
                value={newMessage} 
                onChange={({ target }) => setNewMessage(target.value)} />
            <button onClick={handleNewMessage}>Send Message</button>
        </>
    );
};

Chat.propTypes = {
    messageArray: PropTypes.array.isRequired,
    setNewMessage: PropTypes.func.isRequired,
    handleNewMessage: PropTypes.func.isRequired,
    newMessage: PropTypes.string.isRequired,
    
};

export default Chat;
