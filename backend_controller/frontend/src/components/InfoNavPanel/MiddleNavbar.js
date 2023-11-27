import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EssentialMedia } from '../../utils/_essentialmedia';

const MiddleNavbar = () => {

    const token = localStorage.getItem("authTokens");
    const [isActive, setIsActive] = useState(false);

    // when the user clicks the menu button it dropsdown or closes the menu dropdown
    const menuDropdown = () => {
        if (isActive) {
            setIsActive(false);
        }
        else {
            setIsActive(true);
        }
    }

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
            <div className="menu-nav-cont">
                <div id="menu" className="menu-nav-closed" onClick={menuDropdown}>
                    <li className="menu-text">Menu</li>
                </div>
            </div>
            <ul className="menu-nav-list" style={{ display: isActive ? "block" : "none"}}>
                <li className="home-menu-li">
                    <Link className="to-page" to="/">Home</Link>
                </li>
                <li className="contact-menu-li">
                    <Link className="to-page" to="/contact">Contact Us</Link>
                </li>
                <li className="lakes-menu-li">
                    <Link className="to-page" to="/lakes">Lakes & Reservoirs</Link>
                </li>
                <li className="gallery-menu-li">
                    <Link className="to-page" to="/gallery">Gallery</Link>
                </li>
                {token === null && <></>}
                {token !== null &&
                <>
                    <li className="profile-menu-li">
                        <Link className="to-page" to="/profile">Profile</Link>
                    </li>
                </>
                }
            </ul>
        </div>
    );
};

export default MiddleNavbar;