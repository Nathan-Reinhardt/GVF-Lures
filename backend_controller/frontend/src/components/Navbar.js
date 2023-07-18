import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="main-nav">
            <nav className="left-nav">
                <Link className="site-title" to="/">GVF Lures</Link>
            </nav>
            <div className="search-box-container">
                <input className="search-text-box" type="text" placeholder="Photos, people, or groups"/>
            </div>
        </header>
    );
};

export default Navbar;