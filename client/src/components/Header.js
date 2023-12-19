import React from 'react';
import config from '../modules/config';
import '../styles/App.css';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
// function to standardize header across pages, getting the app name from the config file
// also has the navbar
const Header = () => {
    return (
      <>
            <nav>
                <Link to="./home">home</Link>
                <Link to="./">authenticate</Link>
                <Link to="./login-page">login page</Link>
                <Link to="./faq">faq</Link>
            </nav>
            <h3 className="header">{config.appName}</h3>
      </>
    );
};

export default Header;
