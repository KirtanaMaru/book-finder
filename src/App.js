import React, { useState } from "react";
import './App.css';
import Header from "./Component/Header";
import SearchBar from "./Component/SearchBar";
import BookGrid from "./Component/BookGrid";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fetchBooks = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await res.json();
      if (data.docs.length === 0) setError("No books found.");
      setBooks(data.docs.slice(0, 20));
    } catch {
      setError("Something went wrong. Try again later.");
    }

    setLoading(false);
  };

  return (
  <>
  <div className="background"></div>
  <div className="app">
      <Header/>
      <SearchBar query={query} setQuery={setQuery} onSearch={fetchBooks} />

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && books.length > 0 && (
    <h2 className="results-heading" >
      📚 Showing results for <span>"{query}"</span>
    </h2>
  )}
      <div className="scroll-container">
    {!loading && !error && <BookGrid books={books} />}
  </div>
    </div>
  </>
    

  );
}

export default App;
