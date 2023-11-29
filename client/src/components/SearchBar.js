// SearchBar.js
import React, { useContext, useState } from 'react';
import SharedDataContext from './SharedDataContext';
import BookSearcher from './BookSearch';

function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(SharedDataContext);
  const [searchInput, setSearchInput] = useState(searchTerm);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput); // Update the shared search term
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search for a book"
        />
        <button type="submit">Search</button>
      </form>
      <BookSearcher bookTitle={searchTerm} />
    </>
  );
}

export default SearchBar;
