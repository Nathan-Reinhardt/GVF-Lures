import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import AuthContext from '../../context/AuthContext';
import ViewCart from '../ShopPanel/ViewCart';

// adjust viewcart to be where you want it to be

const TopNavbar = () => {

    // useContext function
    // const {logoutUser} = useContext(AuthContext);
    
    // const token = localStorage.getItem("authTokens");   // used to check if a user is logged in or not
    // if (token) {    // when you need the user_id
        // const decoded = jwt_decode(token);
        // var user_id = decoded.user_id;
        // console.log(user_id);
    // };

    return (
        <div className="master-header">
            <div className="left-nav">
                <ul className="left-nav-menu-list">
                    <li className="home-li">
                        <Link className="topnav-to-page" to="/">Home</Link>
                    </li>
                    <div className="slash-cont">
                        <h3 className="slash-vertical-line">|</h3>
                    </div>
                    <li className="contact-li">
                        <Link className="topnav-to-page" to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
            {/* 
            When Rich gets back, go into css and adjust visiblity and uncomment line below
            */}
            {/* 
            <div className="slash-cont">
                <h3 className="middle-slash-vertical-line">|</h3>
            </div>
            */}
            <div className="right-nav">
                <div className="view-cart-cont">
                    <div className="shopping-cart-img"></div>
                    <ViewCart />
                </div>
                {/*
                disabled for now. Used for user login/signup
                    <ul className="right-nav-menu-list">
                        {token === null &&
                        <>
                            <li className="login-li">
                                <Link className="topnav-to-page" to="/login">Login</Link>
                            </li>
                            <div className="slash-cont">
                                <h3 className="slash-vertical-line">|</h3>
                            </div>
                            <li className="signup-li">
                                <Link className="topnav-to-page" to="/signup">Sign Up</Link>
                            </li>
                        </>
                        }
                        {token !== null &&
                            <li className="logout-li">
                                <Link className="topnav-to-page" onClick={logoutUser} to="/login">Log Out</Link>
                            </li>
                        }
                    </ul>
                */}
            </div>
        </div>
    );
};

export default TopNavbar;