/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import { TextField, MenuItem } from '@material-ui/core';

const SearchFilters = ({ handleDropdownChange }) => {

    return (
<<<<<<< HEAD
        <select onChange={handleDropdownChange} >
            <option value="">All Channels</option>
            <option value="Zoom Karaoke">Zoom Karaoke</option>
            <option value="Vocal Star Karaoke">Vocal Star Karaoke</option>
            <option value="CC Karaoke">CC Karaoke</option>
            <option value="Funbox Karaoke">Funbox Karaoke</option>
            <option value="Good Karaoke Songs">Good Karaoke Songs</option>
            <option value="ObsKure Karaoke">ObsKure Karaoke</option>
        </select>
=======
        <TextField 
            select
            fullWidth
            margin="dense"
            style={{ paddingBottom: "0.5rem" }}
            label="channels"
            onChange={handleDropdownChange} >
            <MenuItem value="">All Channels</MenuItem>
            <MenuItem value="Zoom Karaoke">Zoom Karaoke</MenuItem>
            <MenuItem value="Vocal Star Karaoke">Vocal Star Karaoke</MenuItem>
            <MenuItem value="CC Karaoke">CC Karaoke</MenuItem>
            <MenuItem value="Funbox Karaoke">Funbox Karaoke</MenuItem>
            <MenuItem value="Good Karaoke Songs">Good Karaoke Songs</MenuItem>
            <MenuItem value="ObsKure Karaoke">ObsKure Karaoke</MenuItem>
        </TextField>
>>>>>>> 15d07da484e38632bbede434b24af2a5f6a49a2f
    );
};

SearchFilters.propTypes = {
    handleDropdownChange: PropTypes.func.isRequired
};

export default SearchFilters;
