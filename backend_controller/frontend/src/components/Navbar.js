import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="main-nav">
            <nav className="left-nav">
                <Link className="site-title" to="/">GVF Lures</Link>
            </nav>
        </header>
    );
};

export default Navbar;