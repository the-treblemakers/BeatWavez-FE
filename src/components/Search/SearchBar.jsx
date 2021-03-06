import React from 'react';
import PropTypes from "prop-types";
import { TextField, IconButton, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from '../Styles/greenroomStyles';

const SearchBar = ({ handleQueryChange, query, handleSubmit }) => {
    const classes = useStyles();

    return (
        <Grid
            className={classes.root}
            container
            direction="row"
            justify="center"
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
                    onChange={handleQueryChange} />
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
    );
};

SearchBar.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleQueryChange: PropTypes.func.isRequired,
    query: PropTypes.string
};

export default SearchBar;
