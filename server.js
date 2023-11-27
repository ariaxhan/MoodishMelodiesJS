require('dotenv').config({ path: './spotifytoken.env' });
const express = require('express');
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser'); // Added to parse JSON bodies

const app = express();

// Middleware to parse JSON bodies. This is required if you send JSON data to the server.
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Enable All CORS Requests for development
app.use(cors());

app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());


console.log('Listening on 3003');
app.listen(3003);
