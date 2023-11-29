import { Link } from 'react-router-dom';
import '../css/SearchBar.css';
import SearchBar from './SearchBar';

function HomePage() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/top_playlists">TopPlaylists</Link></li>
        </ul>
      </nav>

      <header>
        <p id="title">Bookish Melodies</p>
      </header>

      <div> 
        <h1>Bookish Melodies</h1> 
        <h2>Book-Inspired Playlist Generator</h2>
      </div>

      <SearchBar />
      
      <footer>
        <p>&copy; 2023 BookishMelodies</p>
      </footer>
    </>
  );
}

export default HomePage;
