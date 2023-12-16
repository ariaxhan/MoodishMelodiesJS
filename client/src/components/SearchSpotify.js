import {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { getTokenFromUrl } from './Authenticate';
import SharedDataContext from "./SharedDataContext";
import * as recommendations from "react-bootstrap/ElementChildren";
const Spotify = require('spotify-web-api-js');

function SearchSpotify() {
    const { searchTerm, setRecommendationsData } = useContext(SharedDataContext);
    const spotify = new Spotify();
    const navigate = useNavigate();

    let mood = searchTerm;
    console.log("SearchSpotify: mood = ", mood);
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
                seed_genres: [mood.toLowerCase()],
                target_valence: moodAttributes[mood].valence,
                target_energy: moodAttributes[mood].energy,
                limit: 10
            });
            if (response && response.tracks) {
                setRecommendationsData(response.tracks);
                navigate('/results');
            }
      }
      }catch (err) {
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
              <h1>Spotify Recommendations for Mood: "{mood}"</h1>
              <ul>
                {recommendations.map((track, index) => (
                    <li key={index}>{track.name} by {track.artists.map(artist => artist.name).join(', ')}</li>
                ))}
              </ul>
            </div>
        );
      }


export default SearchSpotify;
