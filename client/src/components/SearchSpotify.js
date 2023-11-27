import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from './Authenticate';

const spotify = new SpotifyWebApi();

function SearchSpotify() {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Extracting the book title passed in the state from BookSearch.js
    const bookTitle = location.state?.bookTitle;

    if (bookTitle) {
      // Function to search Spotify based on the book title
      const searchSpotify = async (title) => {
        try {
          // Assuming you want to search for playlists related to the book title
          const response = await spotify.searchPlaylists(title);
          if (response.playlists && response.playlists.items) {
            setSearchResults(response.playlists.items);
          }
        } catch (error) {
          console.error('Error searching Spotify:', error);
        }
      };

      // Extracting the token from the URL
      const tokenInfo = getTokenFromUrl();
      if (tokenInfo.access_token) {
        spotify.setAccessToken(tokenInfo.access_token);
        searchSpotify(bookTitle);
      }
    }
  }, [location.state]);

  return (
    <div>
      <h2>Spotify Search Results for "{location.state?.bookTitle}"</h2>
      <ul>
        {searchResults.map((playlist, index) => (
          <li key={index}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchSpotify;
