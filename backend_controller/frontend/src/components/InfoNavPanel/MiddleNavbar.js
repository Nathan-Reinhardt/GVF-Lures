import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MiddleNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const token = localStorage.getItem("authTokens");
        
        return (
            <div>
                <div className="middle-nav-cont">
                    <ul className="middle-nav-list">
                        <li className="home-middle-li">
                            <Link className="to-page" to="/">Home</Link>
                        </li>
                        <li className="contact-middle-li">
                            <Link className="to-page" to="/contact">Contact Us</Link>
                        </li>
                        <li className="lakes-middle-li">
                            <Link className="to-page" to="/lakes">Lakes & Reservoirs</Link>
                        </li>
                        <li className="gallery-middle-li">
                            <Link className="to-page" to="/gallery">Gallery</Link>
                        </li>
                        {token === null && <></>}
                        {token !== null &&
                        <>
                            <li className="profile-middle-li">
                                <Link className="to-page" to="/profile">Profile</Link>
                            </li>
                        </>
                        }
                    </ul>
                </div>
            </div>
        );
    };
};