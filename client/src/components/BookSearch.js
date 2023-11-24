// BookSearch.js
import React, { useState, useEffect } from 'react';

function BookSearcher({ bookTitle }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (bookTitle) {
      const fetchBooks = () => {
        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(bookTitle)}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setBooks(data.docs); // Assuming 'docs' contains the array of books
          })
          .catch(error => console.error('Error fetching books', error));
      };

      fetchBooks();
    }
  }, [bookTitle]); // This effect runs when bookTitle changes

  return (
    <div>
      {books.map((book, index) => (
        <p key={index}>{book.title}</p> // Displaying title of each book
      ))}
    </div>
  );
}

export default BookSearcher;
