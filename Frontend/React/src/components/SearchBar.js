// SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search jobs..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
