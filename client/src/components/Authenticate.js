import React, { useContext, useEffect } from 'react';
import useSpotifyRecommendations from './UseSpotifyRecommendations'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';
import { SharedDataContext } from "./SharedDataContext";

function Authenticate() {
    const navigate = useNavigate();
    const { setRecommendationsData } = useContext(SharedDataContext);
    const mood = localStorage.getItem('mood');
    const { recommendations, error } = useSpotifyRecommendations(mood);

    // Use useEffect to handle navigation or side effects based on recommendations or errors
    useEffect(() => {
        if (recommendations.length > 0) {
            setRecommendationsData(recommendations);
        }
        if (error) {
            console.error("Error fetching Spotify recommendations: ", error);
            // Handle error (e.g., navigate to an error page or show a message)
        }
    }, [recommendations, error, setRecommendationsData, navigate]);

    return (
        <>
            <div>
                <h2>Spotify Recommendations</h2>
                <br />
                {error ? (
                    <p>Error: {error}</p>
                ) : (
                    <p>Here are your Spotify recommendations!</p>
                )}
                <ul>
                    {recommendations.map((recommendation, index) => (
                        <li key={index}>{recommendation.name} by {recommendation.artists}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Authenticate;
