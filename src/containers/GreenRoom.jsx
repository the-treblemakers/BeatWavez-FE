import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../components/Search/SearchBar';
import SearchFilters from '../components/Search/SearchFilters';
import Songbook from '../components/SongBook/Songbook';
import Queue from '../components/Queue/Queue';
import Chat from '../components/Chat/Chat';

const GreenRoom = ({ handleNewMessage, roomInfo, newMessage, messageArray, setNewMessage, queue, handleAddToQueue }) => {
    const [query, setQuery] = useState('');
    const [channelFilter, setChannelFilter] = useState('');
    const [filteredSongs, setFilteredSongs] = useState([]);

    function handleQueryChange(e) {
        setQuery(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <h1>Welcome to the GreenRoom</h1>
            <h2>{roomInfo.roomName} {roomInfo.stageName}</h2>
            {/* DISPLAY ROOM NAME, STAGE NAME INSTRUCTIONS TO INVITE FRIENDS ALSO ADD FLAVOR/GLITTER!!!! In an alert? Or just on the page somewhere? */}
            <SearchBar
                query={query}
                setQuery={setQuery}
                handleQueryChange={handleQueryChange}
                handleSubmit={handleSubmit}
            />
            <SearchFilters
                channelFilter={channelFilter}
                setCurrentSongs={setChannelFilter}
            />
            <Songbook
                // currentSongs={filteredSongs}
                handleAddToQueue={handleAddToQueue}
                stageName={roomInfo.stageName}
            // setCurrentSongs={setFilteredSongs}
            />

            {queue.length > 0 ?
                <Queue
                    queue={queue}
                />
                : null}

            <Chat
                messageArray={messageArray}
                setNewMessage={setNewMessage}
                handleNewMessage={handleNewMessage}
                newMessage={newMessage}
            />

        </div>
    );
};
GreenRoom.propTypes = {
    handleNewMessage: PropTypes.func.isRequired,
    newMessage: PropTypes.string.isRequired,
    roomInfo: PropTypes.object.isRequired,
    messageArray: PropTypes.array.isRequired,
    setNewMessage: PropTypes.func.isRequired,
    queue: PropTypes.array.isRequired,
    handleAddToQueue: PropTypes.func.isRequired
};

export default GreenRoom;
