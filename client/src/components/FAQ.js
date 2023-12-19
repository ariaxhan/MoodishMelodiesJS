import React, {Fragment} from "react";
import "../styles/App.css";

function FAQ() {
  return (
      <>
    <div className="FAQ">
		  <h2>Frequently Asked Questions</h2>
        <br/>
        <ul>
            <li className="question">
                How are the recommended playlists generated?
            </li>
            <li className="answer">
                Each mood has a pre-defined set of valence and energy values,
                which are used to call the Spotify API and get recommendations.
            </li>
            <br/>
            <li className="question">
                Why are there only six moods?
            </li>
            <li className="answer">
                The limitations of the valence and energy values requires them to be pre-defined,
                but this model is a prototype and further progress will be made.
            </li>
            <br/>
            <li className="question">
                What inspired this project?
            </li>
            <li className="answer">
                The Spotify API is incredibly detailed and fascinating to use.
                I wanted to get some experience in integrating the API, especially
                because I'm a long-time user of Spotify and have always wondered
                how the algorithms work behind the scenes. I'm hoping to explore the API
                further and make more sophisticated calls to it.
            </li>
            <br/>
            <li className="question">
                What are future goals for this project?
            </li>
            <li className="answer">
                I hope to be able to integrate a books API and generate playlists
                based on information about inputted books. I did make significant progress in
                this direction, but the specific API that I was using did not provide
                a proper summary of the book, and I decided to focus on the Spotify API
                first before trying another new API.
            </li>
            <br/>
            <li className="question">
                What was the most challenging part of this project?
            </li>
            <li className="answer">
                The Spotify API requires a client secret and client id, which is in turn exchanged for a
                temporary token. It was quite difficult to figure out the flow of that process and
                integrate it into my app.
            </li>
            <br/>
            <li className="question">
                What was the most exciting part of this project?
            </li>
            <li className="answer">
                The most exciting part was honestly just seeing everything come together so well,
                and the level of understanding I was able to develop for both React and Express.js.
            </li>
        </ul>
        <br/>
        <br/>
    </div>
      </>
  );
}

export default FAQ;