import React from 'react';
import PropTypes from 'prop-types';
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { useStyles } from '../Styles/greenroomStyles';

const SearchFilters = ({ channelFilter, handleDropdownChange }) => {
    const classes = useStyles();

    const MenuProps = {
        PaperProps: {
          style: {
            border: 'solid #13FBD0 2px',
            borderRadius: '1px',
            boxShadow: "#13FBD0 0px 0px 5px",
            background: '#13FBD0',
            color: '#10042B',
            "&$selected": {
                background: "#10042B" 
            }
          }
        }
    };
      
    return (
        <FormControl
            margin="dense"
            fullWidth
            style={{ paddingBottom: "0.7rem" }}
            >
            <InputLabel
                id="channel_filter">channel</InputLabel>
            <Select
                labelId="channel_filter"
                value={channelFilter}
                onChange={handleDropdownChange}
                MenuProps={MenuProps}
                >
                    <MenuItem className={classes.menuItem} value="" default>All Channels</MenuItem>
                    <MenuItem className={classes.menuItem} value="Zoom Karaoke">Zoom Karaoke</MenuItem>
                    <MenuItem className={classes.menuItem} value="Vocal Star Karaoke">Vocal Star Karaoke</MenuItem>
                    <MenuItem className={classes.menuItem} value="CC Karaoke">CC Karaoke</MenuItem>
                    <MenuItem className={classes.menuItem} value="Funbox Karaoke">Funbox Karaoke</MenuItem>
                    <MenuItem className={classes.menuItem} value="Good Karaoke Songs">Good Karaoke Songs</MenuItem>
                    <MenuItem className={classes.menuItem} value="ObsKure Karaoke">ObsKure Karaoke</MenuItem>
            </Select>
        </FormControl>
    );
};

SearchFilters.propTypes = {
    channelFilter: PropTypes.string.isRequired,
    handleDropdownChange: PropTypes.func.isRequired
};

export default SearchFilters;
