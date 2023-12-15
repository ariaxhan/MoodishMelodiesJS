import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

// Spotify Authentication Constants and Functions
const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3001/'; // Ensure this matches the URI in Spotify Dashboard
const clientId = '01c9f82ca3e348e2adc1d98eded52db1';

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
];

// Function to extract token from URL
export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            const parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};

// Spotify login URL with required scopes
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`;

// Spotify Authentication Component
const spotify = new SpotifyWebApi();

function Authenticate() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = ''; // Clear the hash from the URL
        const _token = hash.access_token;

        if (_token) {
            setToken(_token); // Set the token in the state
            spotify.setAccessToken(_token); // Set the token for Spotify API

            // Send the token to the Express server
            fetch('http://localhost:3001/set-spotify-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ spotifyToken: _token }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Token sent to the server:', data.message);
                })
                .catch(error => {
                    console.error('Error sending token to server:', error);
                });
        }
    }, []);

    return null; // As this component does not render anything
}

export default Authenticate;
