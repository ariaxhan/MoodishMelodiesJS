require('dotenv').config({ path: './spotifytoken.env' });
const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs').promises;
const os = require('os');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Enable CORS for development
app.use(cors());

let globalSpotifyToken = null; // Variable to store Spotify token

// Endpoint to set Spotify token
app.post('/set-spotify-token', (req, res) => {
    globalSpotifyToken = req.body.spotifyToken;
    res.send({ message: 'Spotify token received and stored.' });
});

// Endpoint for analyzing a book
app.post('/analyze-book', async (req, res) => {
    const { bookData } = req.body;
    const spotifyToken = globalSpotifyToken; // Use the stored Spotify token

    // Create a temporary file to store the data
    const tempDir = os.tmpdir();
    const tempFilePath = path.join(tempDir, 'tempData.json');

    try {
        // Write the combined data to the temporary file
        await fs.writeFile(tempFilePath, JSON.stringify({ bookData, spotifyToken }));

        // Execute the R script with the path to the temporary file
        exec(`Rscript r/Analysis.R ${tempFilePath}`, async (err, stdout, stderr) => {
            // Clean up: delete the temporary file
            await fs.unlink(tempFilePath);

            if (err) {
                console.error('Error executing R script:', err);
                res.status(500).send('Error executing R script');
                return;
            }

            res.json({ analysisResult: stdout }); // Send the result of R script execution back to React
        });
    } catch (error) {
        console.error('Error processing data:', error);
        res.status(500).send('Error processing data');
    }
});

app.listen(3000, () => {
    console.log('Listening on 3000');
});

