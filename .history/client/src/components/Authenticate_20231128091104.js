import React, { useState, useEffect } from 'react';
import SpotifyWebApi from "spotify-web-api-js";

// Spotify Authentication Constants and Functions
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3001/";
const clientId = "01c9f82ca3e348e2adc1d98eded52db1";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// Spotify Authentication Component
const spotify = new SpotifyWebApi();

function Authenticate() {
    const [token, setToken] = useState();

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            setToken(_token);
            spotify.setAccessToken(_token);
            console.log("Token set:", _token); // Logging the actual token received
        }
    }, []);

    // Return something or null if nothing is to be rendered
    return null; // or your JSX here
}

export default Authenticate;
