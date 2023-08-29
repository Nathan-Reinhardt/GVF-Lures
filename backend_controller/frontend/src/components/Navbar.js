import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="master-header">
            <div className="left-nav">
                <ul className="left-nav-menu-list">
                    <li className="home-li">
                        <Link className="home-link" to="/">Home</Link>
                    </li>
                    <li className="about-li">
                        <Link className="about-link" to="/dashboard">About Us</Link>
                    </li>
                </ul>
            </div>
            <div className="splash-slash-cont">
                <h3 className="splash-vertical-line">|</h3>
            </div>
            <div className="right-nav">
                <ul className="right-nav-menu-list">
                    <li className="login-li">
                        <Link className="login-link" to="/login">Login</Link>
                    </li>
                    <li className="signup-li">
                        <Link className="signup-link" to="/signup">Signup</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;