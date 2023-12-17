// Login.js
import {useContext} from "react";
import {SharedDataContext} from "./SharedDataContext";

function Login({ onLogin }) {
    const { searchTerm } = useContext(SharedDataContext);

    // Spotify Authentication Constants and Functions
    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const redirectUri = 'http://localhost:3001/'; // Ensure this matches the URI in Spotify Dashboard
    const clientId = '01c9f82ca3e348e2adc1d98eded52db1';

    const scopes = [
        'playlist-modify-public',
        'playlist-modify-private',
    ];
    // Spotify login URL with required scopes
    const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
        '%20'
    )}&response_type=token&show_dialog=true`;


    console.log("Login.js: loginUrl", loginUrl);
  return (
      <div className="login" onClick={onLogin} style={{ cursor: 'pointer' }}>
      <br /> 
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      <br />
      <br /> 
    </div>
  );
}
export default Login;
