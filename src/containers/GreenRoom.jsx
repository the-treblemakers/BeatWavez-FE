import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../components/Search/SearchBar';
import SearchFilters from '../components/Search/SearchFilters';
import Songbook from '../components/SongBook/Songbook';
import Queue from '../components/Queue/Queue';
import Chat from '../components/Chat/Chat';
import { getAllSongs } from '../services/apiUtils';
import Spinner from '../components/UI/Spinner';

const GreenRoom = ({ handleNewMessage, roomInfo, newMessage, messageArray, setNewMessage, queue, handleAddToQueue }) => {
    const [query, setQuery] = useState('');
    const [songbook, setSongbook] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentSongs, setCurrentSongs] = useState([]);
    const [channelFilter, setChannelFilter] = useState('');
    // const [filteredSongs, setFilteredSongs] = useState([]);

    useEffect(() => {
        getAllSongs()
            .then((songbook) => {
                setSongbook(songbook);
                setCurrentSongs(songbook.slice(0, 20));
            })
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        const filter = () => {
            const filteredSongs = songbook.filter((song) => {
                const channelName = song.channelName;
                return channelName.includes(channelFilter);
            });

            return filteredSongs;
        };
        const filteredResults = filter();
        console.log(filteredResults, 'results');
        return filteredResults;
    }, [channelFilter]);

    function handleQueryChange(e) {
        setLoading(true);
        setQuery(e.target.value);
    }

    function handleDropdownChange(e) {
        setChannelFilter(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);

        const search = () => {
            if (query === '') return songbook;
            return songbook.filter((song) => {
                const title = song.title.toLowerCase();
                return title.includes(query.toLowerCase());
            });
        };
        const searchResults = search();
        setTimeout(() => {
            setCurrentSongs(searchResults);
            setLoading(false);
        }, 100);
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
                handleDropdownChange={handleDropdownChange}
            />
            {loading && <Spinner />}
            {!loading &&
                <Songbook
                    handleAddToQueue={handleAddToQueue}
                    stageName={roomInfo.stageName}
                    currentSongs={currentSongs}
                    setCurrentSongs={setCurrentSongs}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    loading={loading}
                    songbook={songbook}
                />}
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
    handleAddToQueue: PropTypes.func.isRequired,
    handleDropdownChange: PropTypes.func.isRequired,
    songbook: PropTypes.array.isRequired,
    query: PropTypes.string.isRequired,
    handleQueryChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default GreenRoom;
