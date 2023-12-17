import React, {useEffect, useContext, useMemo} from 'react';
import { getTokenFromUrl } from '../scripts/SpotifyUtils';
import { useNavigate } from 'react-router-dom';
import { SharedDataContext } from "./SharedDataContext";
const Spotify = require('spotify-web-api-js');

function Authenticate() {
    console.log("Authenticate");
    const spotify = useMemo(() => new Spotify(), []);
    const navigate = useNavigate();
    const { recommendationsData, setRecommendationsData } = useContext(SharedDataContext);
    const mood = localStorage.getItem('mood');
    console.log("mood: " + mood);
    useEffect(() => {

    const moodAttributes = {
        Happy: {valence: 0.8, energy: 0.8},
        Sad: {valence: 0.2, energy: 0.1},
        Energetic: {valence: 0.9, energy: 0.9},
        Relaxed: {valence: 0.2, energy: 0.2},
        Angry: {valence: 0.2, energy: 0.8},
        Romantic: {valence: 0.8, energy: 0.3},
    };

        const fetchRecommendations = async () => {
            const token = getTokenFromUrl();
            if (token) {
                spotify.setAccessToken(token);
                console.log("token: " + token);
                console.log("SearchSpotify: mood = ", mood);

                try {
                    const response = await spotify.getRecommendations({
                        seed_genres: [mood.toLowerCase()],
                        target_valence: moodAttributes[mood].valence,
                        target_energy: moodAttributes[mood].energy,
                        limit: 10
                    });

                    const data = response.tracks.map(track => (
                        `${track.name} by ${track.artists.map(artist => artist.name).join(', ')}`
                    ));

                    setRecommendationsData(data);
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
                <h3>Spotify Recommendations</h3>
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
