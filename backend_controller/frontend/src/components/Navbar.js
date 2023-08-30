import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    
    let {user} = useContext(AuthContext);   // used to check if a user is logged in or not

    if (!user) {
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
    }
    else {
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
                        <li className="signup-li">
                            <Link className="signup-link" to="/signup">Log Out!</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default Navbar;