import React, { useEffect, useContext, useMemo } from 'react';
import { getTokenFromUrl } from '../scripts/SpotifyUtils';
import { SharedDataContext } from "./SharedDataContext";
import DisplayPlaylist from './DisplayPlaylist';
const Spotify = require('spotify-web-api-js');

function Authenticate() {
    const spotify = useMemo(() => new Spotify(), []);
    const { setRecommendationsData } = useContext(SharedDataContext);

    let mood = localStorage.getItem('mood');
    useEffect(() => {
        const moodAttributes = {
            Happy: { valence: 1.0, energy: 1.0 },
            Sad: { valence: 0.1, energy: 0.1 },
            Energetic: { valence: 0.9, energy: 0.9 },
            Relaxed: { valence: 0.5, energy: 0.1 },
            Angry: { valence: 0.1, energy: 1.0 },
            Romantic: { valence: 0.8, energy: 0.3 },
        };

        const fetchRecommendations = async () => {
            const token = getTokenFromUrl();
            if (token) {
                spotify.setAccessToken(token);
                try {
                    const response = await spotify.getRecommendations({
                        seed_genres: ["pop", "rap", "rock"],
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
                    setRecommendationsData([]);
                }
            }
        };

        if (mood) { // Ensure mood is available before fetching
            fetchRecommendations();
        }
    }, [mood, setRecommendationsData, spotify]);

    return (
        <>
            <h2>Spotify Recommendations</h2>
            <DisplayPlaylist />
        </>
    );
}

export default Authenticate;
