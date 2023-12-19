// Server-side Express app
const express = require('express');
const cors = require('cors');
const {join} = require("path");
const helmet = require('helmet');

const app = express();

// Middleware to protect against common web vulnerabilities/allow rendering of resources
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://api.spotify.com", "https://accounts.spotify.com"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https://i.scdn.co"], // i.scdn.co is for Spotify album art images
        frameSrc: ["'self'", "https://accounts.spotify.com", "https://api.spotify.com"],
        connectSrc: ["'self'", "https://api.spotify.com"], // Needed for making API requests to Spotify
    }
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for development
app.use(cors());
// allow access
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Serve static files from the React app
app.use(express.static(join(__dirname, '../client/build')));

// Endpoint to set Spotify token
app.post('/set-spotify-token', (req, res) => {
    let globalSpotifyToken = req.body.spotifyToken;
    res.send({ message: 'Spotify token received and stored.' });
});

// Endpoint for analyzing a mood
app.post('/analyze-mood', async (req, res) => {
    const { mood } = req.body;
    console.log('Received mood:', mood);
    if (!mood) {
        res.status(400).send('No mood data provided');
        return;
    }
    res.json({ message: `Mood ${mood} received and processed.` });
});


// Serve React app for any other route
app.get('*', (req, res) => {
    res.cookie('cookieName', 'cookieValue', { sameSite: 'none', secure: true });
    res.sendFile(join(__dirname, '../client/build', 'index.html'));
});

const PORT = 3001; // Directly setting the port number
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
