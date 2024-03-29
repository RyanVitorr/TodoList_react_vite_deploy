import React from 'react';
import './SearchStyle.css';

const Search = ({ search, setSearch }) => {
  return (
    <div className='search-div-principal'>
      <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Digite para pesquisar...'/>

    </div>
  )
};

export default Search;