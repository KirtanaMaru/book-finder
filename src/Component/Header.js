import React from 'react';
import bookIcon from "../assets/book.png";

const Header = () => {
  return (
     <header className="header">
      <div className="title-container">
        <img src={bookIcon} alt="Book Icon" className="book-icon" />
        <h1>BookFinder</h1>
      </div>
      <p>Discover your next favorite read instantly</p>
    </header>
  )
}

export default Header
