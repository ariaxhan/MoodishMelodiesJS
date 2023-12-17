import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './public/pages/HomePage';
import Login from './public/pages/Login';
import SearchBar from './public/pages/SearchBar';
import TopPlaylists from './public/pages/TopPlaylists';
import NotFoundPage from './public/pages/NotFoundPage';
import LoginPage from './public/pages/LoginPage';
import Authenticate from "./public/pages/Authenticate";
import Results from "./components/Results";

const routes = () => {
    return (
        <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/' element={<Authenticate />} />
            <Route path="/top_playlists" element={<TopPlaylists />} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/login-page' element={<LoginPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/analyze-mood' element={<SearchBar />} />
            <Route path='/results' element={<Results />} />
            <Route path='/searchbar' element={<SearchBar />} />
        </Routes>
    );
};

export default routes;
