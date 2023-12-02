import React from 'react';

function SearchBar({ onSearch, onCheckboxChange }) {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    onCheckboxChange(isChecked);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleInputChange} />
      <label>
        <input type="checkbox" onChange={handleCheckboxChange} />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
