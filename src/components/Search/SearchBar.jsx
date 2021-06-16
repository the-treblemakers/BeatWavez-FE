import React from 'react';
import PropTypes from "prop-types";

const SearchBar = ({ handleQueryChange, query }) => {
    return (
        // <form aria-label="searchBar" onSubmit={handleSubmit}>
        <form aria-label="searchBar">
            <input placeholder="Search" value={query}
                onChange={handleQueryChange}/>
            {/* <button>Search</button> */}
        </form>
    );
};

SearchBar.propTypes = {
    // handleSubmit: PropTypes.func.isRequired,
    handleQueryChange: PropTypes.func.isRequired,
    query: PropTypes.string
};

export default SearchBar;
