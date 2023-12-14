import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './css/App.css';
import './css/SearchBar.css';
import './css/Spotify.css';
import { SharedDataProvider } from './components/SharedDataContext';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SearchBar from './components/SearchBar';
import TopPlaylists from './components/TopPlaylists';
import NotFoundPage from './components/NotFoundPage'; // Placeholder component for 404 Not Found

function App() {
  return (
    <SharedDataProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/top_playlists" element={<TopPlaylists />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/author' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </SharedDataProvider>
  );
}

export default App;
