import React, {useState, useEffect, useContext} from 'react';
import SharedDataContext from "./SharedDataContext";

function Results() {
    const { recommendationsData } = useContext(SharedDataContext);

    return (
        <>
        <div>
            <h3>Spotify Recommendations</h3>
            <ul>
                {recommendationsData.map((track, index) => (
                    <li key={index}>{track.name} by {track.artists.map(artist => artist.name).join(', ')}</li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default Results;
