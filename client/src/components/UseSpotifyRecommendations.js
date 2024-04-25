// import { useState, useEffect } from 'react';
// import Spotify from 'spotify-web-api-js';
//
// // Function to extract the Spotify token from the URL hash
// const getTokenFromUrl = () => {
//     const hash = window.location.hash
//         .substring(1)
//         .split('&')
//         .reduce((initial, item) => {
//             let parts = item.split('=');
//             initial[parts[0]] = decodeURIComponent(parts[1]);
//             return initial;
//         }, {});
//     window.location.hash = ''; // Clear the hash to protect against access token leakage
//     return hash.access_token;
// };
//
// // Custom hook to fetch Spotify recommendations based on mood
// const useSpotifyRecommendations = (mood) => {
//     const [recommendations, setRecommendations] = useState([]);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         let isSubscribed = true; // Flag to prevent state update if the component is unmounted
//         const token = getTokenFromUrl(); // Extract token at the start of the component lifecycle
//
//         if (!token) {
//             setError('No Spotify token available');
//             return; // Exit early if there is no token
//         }
//
//         const spotifyApi = new Spotify();
//         spotifyApi.setAccessToken(token);
//
//         const moodAttributes = {
//             Happy: { valence: 1.0, energy: 1.0 },
//             Sad: { valence: 0.1, energy: 0.1 },
//             Energetic: { valence: 0.9, energy: 0.9 },
//             Relaxed: { valence: 0.5, energy: 0.1 },
//             Angry: { valence: 0.1, energy: 1.0 },
//             Romantic: { valence: 0.8, energy: 0.3 },
//         };
//
//         if (!moodAttributes[mood]) {
//             setError(`Mood "${mood}" is not recognized.`);
//             return; // Exit early if the mood is not recognized
//         }
//
//         const fetchRecommendations = async () => {
//             try {
//                 const response = await spotifyApi.getRecommendations({
//                     seed_genres: ['pop', 'rap', 'rock'],
//                     target_valence: moodAttributes[mood].valence,
//                     target_energy: moodAttributes[mood].energy,
//                     limit: 10,
//                 });
//
//                 if (isSubscribed) {
//                     const tracks = response.tracks.map(track => ({
//                         name: track.name,
//                         artists: track.artists.map(artist => artist.name).join(', '),
//                     }));
//                     setRecommendations(tracks);
//                 }
//             } catch (err) {
//                 if (isSubscribed) {
//                     setError(`Failed to fetch recommendations: ${err.message}`);
//                 }
//             }
//         };
//
//         fetchRecommendations();
//
//         // Cleanup function to set isSubscribed to false when the component unmounts
//         return () => {
//             isSubscribed = false;
//         };
//     }, [mood]); // Effect only re-runs when mood changes
//
//     return { recommendations, error };
// };
//
// export default useSpotifyRecommendations;
