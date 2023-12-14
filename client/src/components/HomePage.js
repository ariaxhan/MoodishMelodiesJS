import { Link } from 'react-router-dom';
import '../css/SearchBar.css';
import SearchBar from './SearchBar';
import Login from './Login';
import Processing from './Processing';

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
            <h3 id="title">Moodish Melodies</h3>
            <p>Mood-Inspired Playlist Generator</p>
        </header>

        <Processing/>

        <SearchBar />

        <Login />
      
      <footer>
        <p>&copy; 2023 BookishMelodies</p>
      </footer>
    </>
  );
}

export default HomePage;
