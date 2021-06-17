import React from 'react';
import PropTypes from 'prop-types';
import { TextField, MenuItem } from '@material-ui/core';

const SearchFilters = ({ handleDropdownChange }) => {
    return (
        <TextField 
            select
            label="select channels"
            onChange={handleDropdownChange} >
            <MenuItem value="">All Channels</MenuItem>
            <MenuItem value="Zoom Karaoke">Zoom Karaoke</MenuItem>
            <MenuItem value="Vocal Star Karaoke">Vocal Star Karaoke</MenuItem>
            <MenuItem value="CC Karaoke">CC Karaoke</MenuItem>
            <MenuItem value="Funbox Karaoke">Funbox Karaoke</MenuItem>
            <MenuItem value="Good Karaoke Songs">Good Karaoke Songs</MenuItem>
            <MenuItem value="ObsKure Karaoke">ObsKure Karaoke</MenuItem>
        </TextField>
    );
};

SearchFilters.propTypes = {
    handleDropdownChange: PropTypes.func.isRequired
};

export default SearchFilters;
