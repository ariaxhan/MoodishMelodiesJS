import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import FAQ from '../components/FAQ';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import Authenticate from "../components/Authenticate";
import DisplayPlaylist from '../components/DisplayPlaylist';

const RouteComponent = () => {
    return (
        <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/' element={<HomePage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/login-page' element={<LoginPage />} />
            <Route path='/authenticate' element={<Authenticate />} />
            <Route path='/playlist' element={<DisplayPlaylist />} />
        </Routes>
    );
};

export default RouteComponent;
