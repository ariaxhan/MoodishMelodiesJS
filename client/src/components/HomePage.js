import '../styles/SearchBar.css';
import SearchBar from './SearchBar';
import Processing from './Processing';
import '../styles/App.css';
import React from "react";
import Typewriter from 'typewriter-effect';

// homepage where user selects a mood
function HomePage() {
    return (
        <>
            <br/>
            <br/>
            <h2>Mood-Inspired Playlist Generator</h2>

            <Processing/>

            <p>
                <Typewriter
                    options={{
                        strings: ['How are you feeling today?'],
                        autoStart: true,
                        loop: false,
                    }}
                />
            </p>
            <br/>
            <br/>
            <SearchBar/>

        </>
    );
}

export default HomePage;