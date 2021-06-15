/* eslint-disable react/jsx-key */
import React, { useState } from 'react';

const SearchBar = () => {
    const [channelFilter, setChannelFilter] = useState('');

    function handleDropdownChange(e){
        setChannelFilter(e.target.value);

        console.log(channelFilter);
    }

    return (
        <select onChange={handleDropdownChange} >
            <option value="">Filter by Channel</option>
            <option value="Zoom Karaoke">Zoom Karaoke</option>
            <option value="Vocal Star Karaoke">Vocal Star Karaoke</option>
            <option value="CC Karaoke">CC Karaoke</option>
            <option value="Funbox Karaoke">Funbox Karaoke</option>
            <option value="Good Karaoke Songs">Good Karaoke Songs</option>
            <option value="ObsKure Karaoke">ObsKure Karaoke</option>
        </select>
    );
};


export default SearchBar;
