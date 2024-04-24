// DisplayPlaylist.js
import React from 'react';
import useSpotifyRecommendations from "./UseSpotifyRecommendations";

function DisplayPlaylist() {
    const { recommendations, error } = useSpotifyRecommendations();

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!recommendations) {
        return <p>Loading playlist...</p>;
    }

    return (
        <div className="playlist-display">
            <h3>{recommendations.name}</h3>
            <p>{recommendations.description}</p>
            <ul>
                {recommendations.tracks.items.map((item, index) => (
                    <li key={index}>
                        {item.track.name} by {item.track.artists.map(artist => artist.name).join(", ")}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayPlaylist;