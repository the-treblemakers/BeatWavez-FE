import React from 'react';
import PropTypes from "prop-types";
import { TextField, Button, Grid } from '@material-ui/core';

const SearchBar = ({ handleQueryChange, query, handleSubmit }) => {
    return (
        <Grid 
            container
            direction="row"
            alignItems="center"
            justify="center"
            aria-label="searchBar">
            <TextField
                variant="outlined"
                label="search" 
                value={query}
                size="small"
                onChange={handleQueryChange}/>
            <Button 
                name="search"
                size="small"
                variant="contained"
                color="primary"
                onClick={handleSubmit}>
                    Search
            </Button>
        </Grid>
    );
};

SearchBar.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleQueryChange: PropTypes.func.isRequired,
    query: PropTypes.string
};

export default SearchBar;
