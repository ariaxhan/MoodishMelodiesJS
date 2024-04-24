import React from 'react';
import '../styles/SearchBar.css';
import { useNavigate } from 'react-router-dom';

// component to store buttons for each of the moods, programmed to
// store the selected mood in local storage so it can be used by other components

function SearchBar() {
    // navigation to go to other pages
    const navigate = useNavigate();
    // list of predefined mood options
    const moods = ['Happy', 'Sad', 'Energetic', 'Relaxed', 'Angry', 'Romantic'];
    const sendMoodToServer = async (mood) => {
        // send mood as a json
        try {
            const response = await fetch('https://moodishmelodies.pages.dev/analyze-mood', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mood: mood }), // stringify the mood object
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json(); // handling the JSON response
            console.log('Server response:', data);
            localStorage.setItem("mood", mood); // updating the shared search term with the selected mood
            // send search term as response
            return data;
        } catch (error) {
            console.error('Error sending mood to server:', error);
        }
    };

    const handleMoodClick = (mood) => {
        sendMoodToServer(mood).then(response => {
            console.log("Mood sent successfully:", response);
            // redirect to the Spotify login page
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