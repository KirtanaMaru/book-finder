import React from 'react'

const BookCard = ({ book }) => {
  const cover = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://pick2read.com/assets/images/not_found.png";

  return (
    <div className="book-card">
      <img src={cover} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author_name?.[0] || "Unknown Author"}</p>
    </div>
  );
}

export default BookCard
