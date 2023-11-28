require('dotenv').config({ path: './spotifytoken.env' });
const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs').promises;

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Enable All CORS Requests for development
app.use(cors());

// Endpoint for analyzing a book
app.post('/analyze-book', (req, res) => {
    const { bookData, spotifyToken } = req.body;

    // Here, you would pass bookData and spotifyToken to your R script.
    // For example, you might save the data to a file that your R script reads,
    // or pass them as command line arguments to the Rscript command.

    // This is a placeholder for the R script execution.
    exec(`Rscript r/Analysis.R ${spotifyToken}`, (err, stdout, stderr) => {
        if (err) {
            console.error('Error executing R script:', err);
            res.status(500).send('Error executing R script');
            return;
        }
        res.json({ analysisResult: stdout }); // Send the result of R script execution back to React
    });
});

app.listen(3003, () => {
    console.log('Listening on 3003');
});
