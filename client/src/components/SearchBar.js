import React, { useContext, useState } from 'react';
import SharedDataContext from './SharedDataContext';
import '../css/SearchBar.css';
import { useNavigate } from 'react-router-dom';
function SearchBar() {
    const { setSearchTerm } = useContext(SharedDataContext);
    const [isLoading, setIsLoading] = useState(false); // State to track the loading status
    const navigate = useNavigate();
    const moods = ['Happy', 'Sad', 'Energetic', 'Relaxed', 'Angry', 'Romantic'];

    const sendMoodToServer = async (mood) => {
        setIsLoading(true); // Start loading
        try {
            const response = await fetch('http://localhost:3001/analyze-mood', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Corrected header
                },
                body: JSON.stringify({ mood: mood }), // Stringify the mood object
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json(); // Correctly handling the JSON response
            console.log('Server response:', data);
            setSearchTerm(mood); // Update the shared search term with the selected mood
            // send search term as response
            return data;
        } catch (error) {
            console.error('Error sending mood to server:', error);
        } finally {
            setIsLoading(false); // End loading
        }
    };

    const handleMoodClick = (mood) => {
        sendMoodToServer(mood).then(response => {
            console.log("Mood sent successfully:", response);
            // Redirect to the Spotify login page
            navigate('/login-page');
        });
    };

    return (
        <div className="mood-button-container">
            {moods.map((mood, index) => ( // Hide mood buttons when loading
                <button key={index} className="mood-button" onClick={() => handleMoodClick(mood)}>
                    {mood}
                </button>
            ))}
        </div>
    );
}

export default SearchBar;
