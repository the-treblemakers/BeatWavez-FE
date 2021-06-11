/* eslint-disable react/jsx-key */
import React, { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [channelFilter, setChannelFilter] = useState('');
    

    function handleQueryChange(e){
        setQuery(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
    }

    function handleDropdownChange(e){
        setChannelFilter(e.target.value);
    }

    return (
        <form aria-label="searchBar" onSubmit={handleSubmit}>
            <select onChange={handleDropdownChange} >
                <option value="">Filter by Channel</option>
                <option value="Zoom Karaoke">Zoom Karaoke</option>
                <option value="Vocal Star Karaoke">Vocal Star Karaoke</option>
                <option value="CC Karaoke">CC Karaoke</option>
                <option value="Funbox Karaoke">Funbox Karaoke</option>
                <option value="Good Karaoke Songs">Good Karaoke Songs</option>
                <option value="ObsKure Karaoke">ObsKure Karaoke</option>
            </select>
            <input placeholder="Query" value={query}
                onChange={handleQueryChange}/>
            <button>Search for Song</button>
        </form>
    );
};


export default SearchBar;
