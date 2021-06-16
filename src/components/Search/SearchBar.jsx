import React from 'react';
import PropTypes from "prop-types";

const SearchBar = ({ handleSubmit, handleQueryChange, query }) => {
    // const [query, setQuery] = useState(''); 

    return (
        <form aria-label="searchBar" onSubmit={handleSubmit}>
            <input placeholder="Query" value={query}
                onChange={handleQueryChange}/>
            <button>Search for Song</button>
        </form>
    );
};

SearchBar.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleQueryChange: PropTypes.func.isRequired,
    query: PropTypes.string
};

export default SearchBar;
