// Login.js
// component for the Spotify login process triggered when this component's button is clicked
function Login({ onLogin }) {
    // Spotify Authentication Constants and Functions
    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const redirectUri = 'http://localhost:3001/';
    const clientId = '01c9f82ca3e348e2adc1d98eded52db1';
    // define what information is being requested of the user
    const scopes = [
        'playlist-modify-public',
        'playlist-modify-private',
    ];
    // spotify login URL with required scopes
    const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
        '%20'
    )}&response_type=token&show_dialog=true`;
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
