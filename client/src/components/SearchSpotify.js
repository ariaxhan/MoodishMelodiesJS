import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from './Authenticate';

const spotify = new SpotifyWebApi();

function SearchSpotify() {
  const location = useLocation();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const mood = location.state?.mood;

    if (mood) {
      // Function to get recommendations from Spotify based on the mood
      const getSpotifyRecommendations = async (mood) => {
        try {
          // Define attributes or seeds based on the mood
          const moodAttributes = {
            Happy: { valence: 0.8, energy: 0.8 },
            Sad: { valence: 0.2, energy: 0.3 },
            // Add other moods here
          };

          // Fetch recommendations
          const response = await spotify.getRecommendations({
            seed_genres: ['pop'], // Example: using 'pop' genre as seed
            target_valence: moodAttributes[mood]?.valence,
            target_energy: moodAttributes[mood]?.energy,
          });

          if (response.tracks) {
            setRecommendations(response.tracks);
          }
        } catch (error) {
          console.error('Error fetching recommendations:', error);
        }
      };

      // Extracting the token from the URL
      const tokenInfo = getTokenFromUrl();
      if (tokenInfo.access_token) {
        spotify.setAccessToken(tokenInfo.access_token);
        getSpotifyRecommendations(mood);
      }
    }
  }, [location.state]);

  return (
      <div>
        <h2>Spotify Recommendations for Mood: "{mood}"</h2>
        <ul>
          {recommendations.map((track, index) => (
              <li key={index}>{track.name} by {track.artists.map(artist => artist.name).join(', ')}</li>
          ))}
        </ul>
      </div>
  );
}

export default SearchSpotify;
