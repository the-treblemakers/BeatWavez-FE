import React, { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState(''); 

    function handleQueryChange(e){
        setQuery(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();

    return (
        <form aria-label="searchBar" onSubmit={handleSubmit}>
            <input placeholder="Query" value={query}
                onChange={handleQueryChange}/>
            <button>Search for Song</button>
        </form>
    );
};


export default SearchBar;
