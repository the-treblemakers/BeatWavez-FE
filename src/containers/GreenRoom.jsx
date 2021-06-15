import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../components/Search/SearchBar';
import SearchFilters from '../components/Search/SearchFilters';
import Songbook from '../components/SongBook/Songbook';
// import Queue from '../components/Queue/Queue';
import Chat from '../components/Chat/Chat';


const GreenRoom = ({ handleNewMessage, roomInfo, newMessage, messageArray }) => {


    return (
        <div>
            <h1>{roomInfo.roomName} {roomInfo.stageName}</h1>
            {/* 
            WELCOME MESSAGE 
            DISPLAY ROOM NAME, STAGE NAME
            INSTRUCTIONS TO INVITE FRIENDS
            ALSO ADD FLAVOR/GLITTER!!!!
            */}
            GreenRoom
            <SearchBar />
            <SearchFilters />
            <Songbook />
            {/*<Queue /> */}
            <Chat />

        </div>
    );
};
<<<<<<< HEAD
=======
GreenRoom.propTypes = {
    handleNewMessage: PropTypes.func.isRequired,
    newMessage: PropTypes.string.isRequired,
    roomInfo: PropTypes.object.isRequired,
    messageArray: PropTypes.array.isRequired,
};
>>>>>>> ee78b03ac45bdfd107dafe4af3f0e1588ee764d9

export default GreenRoom;
