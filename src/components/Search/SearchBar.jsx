import React from 'react';
import PropTypes from "prop-types";
<<<<<<< HEAD

const SearchBar = ({ handleQueryChange, query, handleSubmit }) => {
    return (
        <form aria-label="searchBar" onSubmit={handleSubmit}>
            <input placeholder="Search" value={query}
                onChange={handleQueryChange}/>
            <button>Search</button>
        </form>
=======
import { TextField, IconButton, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({ handleQueryChange, query, handleSubmit }) => {
    return (
        <Grid 
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            aria-label="searchBar"
            spacing={1}
            >
                <Grid item xs={10}>
                    <TextField
                        variant="outlined"
                        label="search" 
                        value={query}
                        size="small"
                        onChange={handleQueryChange}/>
                </Grid>
                <Grid item xs={2}>
                    <IconButton 
                        name="search"
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}>
                            <SearchIcon />
                    </IconButton>
                </Grid>
        </Grid>
>>>>>>> 15d07da484e38632bbede434b24af2a5f6a49a2f
    );
};

SearchBar.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleQueryChange: PropTypes.func.isRequired,
    query: PropTypes.string
};

export default SearchBar;
