import React from 'react';

const SearchBar = ({searchTerm, setSearchTerm}) => {

  const handleChange = (e) => {
    console.log(e)
    setSearchTerm(e.target.value);
  }

  return (

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
  )
};

export default SearchBar