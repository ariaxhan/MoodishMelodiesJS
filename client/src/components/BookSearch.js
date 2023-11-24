// BookSearch.js
import { useEffect, useState } from 'react';
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
          .then(response => response.json()) // Parsing the JSON response
          .then(data => {
            console.log(data.docs);
            // Updating the books state with the fetched data
            setBooks(data.docs); // Assuming 'docs' contains the array of books
          })
          .catch(error => console.error('Error fetching books', error)); // Handling any fetch errors
      };

      // Calling the fetchBooks function
      fetchBooks();
    }
  }, [bookTitle]); // The effect will re-run when the bookTitle prop changes

  // Rendering the fetched book data
return (
  <div>
    {books.map((book, index) => (
      <div key={index}> {/* Use a div to wrap both title and authors, and use index here */}
        <p class="title">{book.title}</p>
        {/* Check if author_name exists and is an array, then map over it to display each author's name */}
        {Array.isArray(book.author_name) && book.author_name.map((authorName, authorIndex) => (
          <p class="author" key={authorIndex}>{authorName}</p>
        ))}
      </div>
    ))}
  </div>
);

}

export default BookSearcher;
