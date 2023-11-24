import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import SearchBar from './SearchBar';
import '../css/SearchBar.css';

function HomePage() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">HomePage</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/search">SearchBar</Link></li>
          <li><Link to="/top_playlists">TopPlaylists</Link></li>
        </ul>
      </nav>

      <header>
        <p id="title">Bookish Melodies</p>
      </header>

      <main>
        <div className="title">
          <h1>Book-Inspired Playlist Generator</h1>
        </div>
        <SearchBar />
      </main>

      <footer>
        <p>&copy; 2023 Book-Inspired Playlist Generator</p>
      </footer>
    </div>
  );
}

export default HomePage;
