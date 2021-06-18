import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Menu, MenuItem } from '@material-ui/core';
import { useStyles } from '../Styles/greenroomStyles';

const SearchFilters = ({ channelFilter, handleDropdownChange }) => {
    const classes = useStyles();

    return (
        <TextField
            select
            fullWidth
            margin="dense"
            style={{ paddingBottom: "0.5rem" }}
            label="channels"
            value={channelFilter}
            onChange={handleDropdownChange}
            classes={{ paper: classes.filter }}
            // className={classes.root}
            >
                <MenuItem value="" default>All Channels</MenuItem>
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
    channelFilter: PropTypes.string.isRequired,
    handleDropdownChange: PropTypes.func.isRequired
};

export default SearchFilters;
