import React from 'react';
import '../styles/App.css';
// function to standardize footer across pages, displaying the current date
const Footer = () => {
    const currentDate = new Date().toLocaleDateString(); // Customize date format as needed
    // add current time
    return (
        <div>
            <footer>
                <p className="footer">Current Date: {currentDate}</p>
            </footer>
        </div>
    );
};

export default Footer;
