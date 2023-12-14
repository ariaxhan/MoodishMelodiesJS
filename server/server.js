// Server-side Express app
const express = require('express');
const cors = require('cors');
const {join} = require("path");

const app = express();

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

    // Here, you can add any logic to process the mood data

    // Example response
    res.json({ message: `Mood ${mood} received and processed.` });
});

const PORT = 3001; // Directly setting the port number
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
