import React from 'react';
import '../styles/components/Search.css';

const Search = ({ handleChangeSearch, placeholder }) => (
  <div className="search">
    <input
      id="search"
      className="search__input"
      type="text"
      placeholder={placeholder}
      onChange={handleChangeSearch}
    />
    <label className="tasks__search__container" htmlFor="search" />
    <i className="fas fa-search" />
  </div>
);

export default Search;
