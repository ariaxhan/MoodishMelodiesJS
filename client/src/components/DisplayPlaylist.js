import React from 'react';

function DisplayPlaylist({ playlist }) {
    if (!playlist) {
        return <p>Loading playlist...</p>;
    }

    return (
        <div className="playlist-display">
            <h2>{playlist.name}</h2>
            <p>{playlist.description}</p>
            <ul>
                {playlist.tracks.items.map((item, index) => (
                    <li key={index}>
                        {item.track.name} by {item.track.artists.map(artist => artist.name).join(", ")}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayPlaylist;
