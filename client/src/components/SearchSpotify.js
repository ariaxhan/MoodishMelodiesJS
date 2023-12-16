import {useContext, useEffect, useState} from 'react';
import { getTokenFromUrl } from './Authenticate';
import SharedDataContext from "./SharedDataContext";
const Spotify = require('spotify-web-api-js');

function SearchSpotify() {
  const { searchTerm } = useContext(SharedDataContext);
  const [recommendations, setRecommendations] = useState([]);
    const spotify = new Spotify();

    let mood = searchTerm;
    useEffect(() => {
    const moodAttributes = {
      Happy: { valence: 0.8, energy: 0.8 },
      Sad: { valence: 0.2, energy: 0.1 },
      Energetic: { valence: 0.9, energy: 0.9 },
      Relaxed: { valence: 0.2, energy: 0.2 },
      Angry: { valence: 0.2, energy: 0.8 },
      Romantic: { valence: 0.8, energy: 0.3 },
    };
    const getSpotifyRecommendations = async (mood) => {
      try {
        if (mood in moodAttributes) {
            const response = await spotify.getRecommendations({
                target_valence: moodAttributes[mood].valence,
                target_energy: moodAttributes[mood].energy,
            });
            console.log('Recommendations for mood', response);
        }
      } catch (err) {
          console.error('Error getting recommendations:', err);
      }
    };


 // Extract the token
    const tokenInfo = getTokenFromUrl();
    const _token = tokenInfo ? tokenInfo.access_token : null;
    if (_token) {
        spotify.setAccessToken(_token);
        getSpotifyRecommendations().then(r => console.log('Recommendations:', r));
    }
    }, [mood]); // Dependency on mood


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
