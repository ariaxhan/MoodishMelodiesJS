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
import NotFoundPage from './components/NotFoundPage';
import LoginPage from './components/LoginPage';
import Authenticate from "./components/Authenticate";
import Results from "./components/Results";


function App() {
  return (
    <SharedDataProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/top_playlists" element={<TopPlaylists />} />
          <Route path='*' element={<NotFoundPage />} />

          <Route path='/login-page' element={<LoginPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/set-spotify-token' element={<Authenticate />} />
          <Route path='/authenticate' element={<Authenticate />} />
          <Route path='/analyze-mood' element={<SearchBar />} />
          <Route path='/results' element={<Results />} />
        </Routes>
      </Router>
    </SharedDataProvider>
  );
}

export default App;
