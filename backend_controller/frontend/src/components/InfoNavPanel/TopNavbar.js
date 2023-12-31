import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import AuthContext from '../../context/AuthContext';

const TopNavbar = () => {

    const {logoutUser} = useContext(AuthContext);
    const token = localStorage.getItem("authTokens");   // used to check if a user is logged in or not

    if (token) {    // when you need the user_id
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
                    <div className="slash-cont">
                        <h3 className="slash-vertical-line">|</h3>
                    </div>
                    <li className="contact-li">
                        <Link className="contact-link" to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="slash-cont">
                <h3 className="middle-slash-vertical-line">|</h3>
            </div>
            <div className="right-nav">
                <ul className="right-nav-menu-list">
                    {token === null &&
                    <>
                        <li className="login-li">
                            <Link className="login-link" to="/login">Login</Link>
                        </li>
                        <div className="slash-cont">
                            <h3 className="slash-vertical-line">|</h3>
                        </div>
                        <li className="signup-li">
                            <Link className="signup-link" to="/signup">Sign Up</Link>
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

export default TopNavbar;