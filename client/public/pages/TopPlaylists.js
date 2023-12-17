import React from "react";
import "../styles/App.css";
import Results from "./Results";

function TopPlaylists() {
  return (
      <>
    <div className="topPlaylists">
		  <h2>Top Playlists</h2>
      <br />
      <Results/>

	  <br/>	
    </div>
    </>
  );
}

export default TopPlaylists;