import React from 'react';
import Header from './Header';
import Footer from './Footer';

// template for the header and footer to be used with the other components
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
