import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import AuthContext from '../context/AuthContext';

const Navbar = () => {

    const {user, logoutUser} = useContext(AuthContext);   // used to check if a user is logged in or not
    const token = localStorage.getItem("authTokens");

    if (token) {
        const decoded = jwt_decode(token);
        var user_id = decoded.user_id;
    }

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
                    {token === null &&
                    <>
                        <li className="login-li">
                            <Link className="login-link" to="/login">Login</Link>
                        </li>
                        <li className="signup-li">
                            <Link className="signup-link" to="/signup">Signup</Link>
                        </li>
                    </>
                    }
                    {token !== null &&
                    <>
                        <li className="logout-li">
                            <Link className="logout-link" onClick={logoutUser}>Log Out</Link>
                        </li>
                    </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;