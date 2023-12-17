import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './public/styles/App.css';
import './public/styles/SearchBar.css';
import './public/styles/Spotify.css';
import SharedDataProvider from './public/pages/SharedDataContext';
import routes from "./routes/routes";


function App() {
  return (
    <SharedDataProvider>
      <Router>
        <routes />
      </Router>
    </SharedDataProvider>
  );
}

export default App;
