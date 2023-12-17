import React, { useEffect, useState, useContext } from 'react';
import { getTokenFromUrl } from '../utils/SpotifyUtils';
import { useNavigate } from 'react-router-dom';
import { SharedDataContext } from "./SharedDataContext";
const Spotify = require('spotify-web-api-js');

function Authenticate() {
    console.log("Authenticate");

    const spotify = new Spotify();
    const navigate = useNavigate();
    const { recommendationsData, setRecommendationsData } = useContext(SharedDataContext);

    const mood = localStorage.getItem('mood');

    console.log("mood: " + mood);

    const moodAttributes = {
        Happy: {valence: 0.8, energy: 0.8},
        Sad: {valence: 0.2, energy: 0.1},
        Energetic: {valence: 0.9, energy: 0.9},
        Relaxed: {valence: 0.2, energy: 0.2},
        Angry: {valence: 0.2, energy: 0.8},
        Romantic: {valence: 0.8, energy: 0.3},
    };

    useEffect(async () => {
        const token = getTokenFromUrl();
        if (token) {
            spotify.setAccessToken(token);
            console.log("token: " + token);
            console.log("SearchSpotify: mood = ", mood);

                const response = await spotify.getRecommendations({
                    seed_genres: [mood.toLowerCase()],
                    target_valence: moodAttributes[mood].valence,
                    target_energy: moodAttributes[mood].energy,
                    limit: 10
                });

                let data = response.tracks.map((track, index) => (
                    track.name + " by " + track.artists.map(artist => artist.name).join(', ')
                ));

                console.log("data: ", data);
                console.log(typeof data);

                setRecommendationsData(data);
            // Redirect to the results page
        }
    }, [navigate, mood, setRecommendationsData]);


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



//     useEffect(() => {
//         const _token = getTokenFromUrl();
//         window.location.hash = '';
//         if (_token) {
//             setToken(_token); // Set the token in the state
//             setSpotifyToken(_token); // Update the token in the shared context
//             spotify.setAccessToken(_token); // Set the token for Spotify API
//
//         // Send the token to the Express server
//         fetch('http://localhost:3001/set-spotify-token', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({spotifyToken: _token}),
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Token sent to the server:', data.message);
//             })
//             .catch(error => {
//                 console.error('Error sending token to server:', error);
//             });
//         }
//     }, []);
//
//
//     return null; // As this component does not render anything
// }

export default Authenticate;
