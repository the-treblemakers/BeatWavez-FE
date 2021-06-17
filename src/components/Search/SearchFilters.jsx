/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

const SearchFilters = ({ handleDropdownChange }) => {

    return (
        <select onChange={handleDropdownChange} >
            <option value="">All Channels</option>
            <option value="Zoom Karaoke">Zoom Karaoke</option>
            <option value="Vocal Star Karaoke">Vocal Star Karaoke</option>
            <option value="CC Karaoke">CC Karaoke</option>
            <option value="Funbox Karaoke">Funbox Karaoke</option>
            <option value="Good Karaoke Songs">Good Karaoke Songs</option>
            <option value="ObsKure Karaoke">ObsKure Karaoke</option>
        </select>
    );
};

SearchFilters.propTypes = {
    handleDropdownChange: PropTypes.func.isRequired
};

export default SearchFilters;
