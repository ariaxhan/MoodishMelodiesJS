import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from './Authenticate';

const spotify = new SpotifyWebApi();

function SearchSpotify() {
  const location = useLocation();
  const [recommendations, setRecommendations] = useState([]);
  const mood = location.state?.mood;

  // Function to get recommendations from Spotify based on the mood
  const getSpotifyRecommendations = async function (options) {
    // Default values for the options
    const response = await this.fetch({
      url: "/recommendations",
      params: options,
    });
    return response;

  };
  useEffect(() => {
    const mood = location.state?.mood;

    if (mood) {
      // Function to get recommendations from Spotify based on the mood
      const getSpotifyRecommendations = async (mood) => {
        try {
          // Define attributes or seeds based on the mood
          const moodAttributes = {
            Happy: { valence: 0.8, energy: 0.8 },
            Sad: { valence: 0.2, energy: 0.1 },
            Energetic: { valence: 0.9, energy: 0.9 },
            Relaxed: { valence: 0.2, energy: 0.2 },
            Angry: { valence: 0.2, energy: 0.8 },
            Romantic: { valence: 0.8, energy: 0.3 },
          };


          const getSpotifyRecommendations = async () => {
            try {
              if (mood in moodAttributes) {
                const response = await spotify.getRecommendations({
                  target_valence: moodAttributes[mood].valence,
                  target_energy: moodAttributes[mood].energy,
                });

                if (response.tracks) {
                  setRecommendations(response.tracks);
                }
              }
            } catch (error) {
              console.error('Error fetching recommendations:', error);
            }
          };
          try {
                const tokenInfo = getTokenFromUrl();
                const _token = tokenInfo ? tokenInfo.access_token : null;

                if (_token) {
                  spotify.setAccessToken(_token);
                  getSpotifyRecommendations();
                }
              }, [mood]); // Dependency on mood
        } catch (error) {
          console.error('Error fetching recommendations:', error);
        }


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
