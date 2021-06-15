import React from 'react';
import SearchBar from '../components/Search/SearchBar';
import SearchFilters from '../components/Search/SearchFilters';
import Songbook from '../components/SongBook/Songbook';
// import Queue from '../components/Queue/Queue';
import Chat from '../components/Chat/Chat';


const GreenRoom = () => {


    return (
        <div>
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

export default GreenRoom;
