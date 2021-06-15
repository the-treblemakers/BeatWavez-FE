import React, { useState } from 'react';
import SearchBar from '../components/Search/SearchBar';
import SearchFilters from '../components/Search/SearchFilters';
import Songbook from '../components/SongBook/Songbook';
// import Queue from '../components/Queue/Queue';
import Chat from '../components/chat/Chat';


const GreenRoom = () => {
    const [query, setQuery] = useState('');
    const [channelFilter, setChannelFilter] = useState('');
    const [filteredSongs, setFilteredSongs] = useState([]);
    
    function handleQueryChange(e){
        setQuery(e.target.value);
    }
    
    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <div>
            Welcome to the GreenRoom
            {/* DISPLAY ROOM NAME, STAGE NAME INSTRUCTIONS TO INVITE FRIENDS ALSO ADD FLAVOR/GLITTER!!!! */}
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
                currentSongs={filteredSongs}
                setCurrentSongs={setFilteredSongs}
            />
            {/* <Queue /> */}
            <Chat />

        </div>
    );
};

export default GreenRoom;
