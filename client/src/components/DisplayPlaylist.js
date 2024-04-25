// DisplayPlaylist.js
import React, { useContext } from 'react';
import { SharedDataContext } from "./SharedDataContext";

function DisplayPlaylist() {
    const { recommendationsData } = useContext(SharedDataContext);

    if (!recommendationsData || recommendationsData.length === 0) {
        return <p>Loading playlist or no recommendations found...</p>;
    }

    return (
        <div className="playlist-display">
            <h3>Your Spotify Playlist</h3>
            <ul>
                {recommendationsData.map((track, index) => (
                    <li key={index}>{track}</li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayPlaylist;
