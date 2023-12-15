import React, { useContext, useState } from 'react';
import SharedDataContext from './SharedDataContext';
import '../css/SearchBar.css';
function SearchBar() {
    const { setSearchTerm } = useContext(SharedDataContext);
    const [isLoading, setIsLoading] = useState(false); // State to track the loading status

    const moods = ['Happy', 'Sad', 'Energetic', 'Relaxed', 'Angry', 'Romantic'];

    const sendMoodToServer = async (mood) => {
        setIsLoading(true); // Start loading
        try {
            const response = await fetch('http://localhost:3001/analyze-mood', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Send the selected mood to the server
                body: JSON.stringify({ mood: mood }),
            });
            // Get the response from the server
            const data = await response.json();
            console.log('Server response:', data);
            setSearchTerm(mood); // Update the shared search term with the selected mood
        } catch (error) {
            console.error('Error sending mood to server:', error);
        } finally {
            setIsLoading(false); // End loading
        }
    };

    const handleMoodClick = (mood) => {
        sendMoodToServer(mood); // Send the selected mood to the server
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
