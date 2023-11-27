// BookSearch.js
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/BookSearch.css';

function BookSearcher({ bookTitle }) {
  // useState hook to maintain the state of the books array
  const [books, setBooks] = useState([]);

  // useEffect hook to perform side effects (fetching data in this case)
  useEffect(() => {
    // Only fetch books if a bookTitle is provided
    if (bookTitle) {
      // Function to fetch books from the API
      const fetchBooks = () => {
        // Constructing the API URL, encoding the bookTitle to ensure it's URL-safe
        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(bookTitle)}`;
        
        // Fetching data from the API
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const uniqueAuthors = new Set();
          const filteredBooks = data.docs.filter(book => {
            if (book.author_name) {
              const authors = book.author_name.filter(author => {
                if (!uniqueAuthors.has(author)) {
                  uniqueAuthors.add(author);
                  return true;
                }
                return false;
              });
              if (authors.length > 0) {
                book.author_name = authors;
                return true;
              }
            }
            return false;
          });
          setBooks(filteredBooks);
        })
        .catch(error => console.error('Error fetching books', error));
    };

      // Calling the fetchBooks function
      fetchBooks();
    }
  }, [bookTitle]); // The effect will re-run when the bookTitle prop changes

  // Rendering the fetched book data
return (
  <div>
    {books.map((book, index) => (
    <div key={index}>
      {Array.isArray(book.author_name) && book.author_name.map((authorName, authorIndex) => (
        <p className="title">{book.title} 
          <li className="author">
            <Link to={{ 
              pathname: '/SearchSpotify', 
              state: { bookTitle: book.title } 
            }}>
              by {authorName}
            </Link>
          </li>
        </p>
      ))}
    </div>
  ))}
  </div>
);

}

export default BookSearcher;
