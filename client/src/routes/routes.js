import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import FAQ from '../components/FAQ';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
// import Authenticate from "../components/Authenticate";

const RouteComponent = () => {
    return (
        <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/' element={<HomePage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/login-page' element={<LoginPage />} />
        </Routes>
    );
};

export default RouteComponent;
