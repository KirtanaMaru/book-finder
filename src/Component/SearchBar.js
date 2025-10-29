import React from 'react'

const SearchBar = ({ query, setQuery, onSearch }) => {
  return (
    <form className="search-bar" onSubmit={onSearch}>
      <div className="search-wrapper">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="text"
          placeholder="Search books by title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">Search</button>
      </div>
    </form>
  )
}

export default SearchBar
