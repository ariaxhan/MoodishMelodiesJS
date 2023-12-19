import React, {useEffect, useContext, useMemo} from 'react';
import { getTokenFromUrl } from '../scripts/SpotifyUtils';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';
import { SharedDataContext } from "./SharedDataContext";
const Spotify = require('spotify-web-api-js');

function Authenticate() {
    // create spotify object, making sure it is only created once
    const spotify = useMemo(() => new Spotify(), []);
    // create navigate object to route to different pages within the page
    const navigate = useNavigate();
    // define variables from SharedDataContext to get from other components
    let { recommendationsData, setRecommendationsData } = useContext(SharedDataContext);
    // retrieve mood from the local storage
    const mood = localStorage.getItem('mood');
    // use mood to call the Spotify API and get recommendations
    useEffect(() => {
        // predefined set of moods with corresponding valence and energy levels
        const moodAttributes = {
            Happy: {valence: 1.0, energy: 1.0},
            Sad: {valence: 0.1, energy: 0.1},
            Energetic: {valence: 0.9, energy: 0.9},
            Relaxed: {valence: 0.5, energy: 0.1},
            Angry: {valence: 0.1, energy: 1.0},
            Romantic: {valence: 0.8, energy: 0.3},
        };
        // async function to fetch recommendations when appropriate
        const fetchRecommendations = async () => {
            // store and set  Spotify access token
            const token = getTokenFromUrl();
            if (token) {
                spotify.setAccessToken(token);
                try {
                    // use the getRecommendations function from the Spotify Web API to get recommendations
                    const response = await spotify.getRecommendations({
                        seed_genres: ["pop", "rap", "rock"],
                        target_valence: moodAttributes[mood].valence,
                        target_energy: moodAttributes[mood].energy,
                        limit: 10
                    });
                    // extract track names and artists from the data
                    const data = response.tracks.map(track => (
                        `${track.name} by ${track.artists.map(artist => artist.name).join(', ')}`
                    ));
                    // If it's a string, split it into an array; otherwise, just set it directly
                    if (typeof data === 'string') {
                        setRecommendationsData(data.split(","));
                    } else {
                        // If fetchedData is already an array, set it directly
                        setRecommendationsData(data);
                    }
                } catch (error) {
                    console.error("Error fetching Spotify recommendations: ", error);
                }
            }
        };
        fetchRecommendations().then(r => console.log("Recommendations fetched successfully:", r));
    }, [navigate, mood, setRecommendationsData, spotify]);

    return (
        <>
            <div>
                <h2>Spotify Recommendations</h2>
                <br/>
                <p>Here are your Spotify recommendations!</p>

                <ul>
                    {Array.isArray(recommendationsData) && recommendationsData.map((datum, index) => (
                        <li key={index}>{datum}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Authenticate;
