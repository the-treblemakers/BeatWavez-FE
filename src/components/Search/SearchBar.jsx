import React from 'react';
import PropTypes from "prop-types";

<<<<<<< HEAD
const SearchBar = () => {
    const [query, setQuery] = useState(''); 

    function handleQueryChange(e){
        setQuery(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
=======
const SearchBar = ({ handleSubmit, handleQueryChange, query }) => {
    // const [query, setQuery] = useState(''); 
>>>>>>> 052948fc84d7317b8572902f2d68a9612e3daf0e

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
