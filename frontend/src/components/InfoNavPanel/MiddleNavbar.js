import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MiddleNavbar = () => {

    // to check if the user is logged in
    const token = localStorage.getItem("authTokens");
    
    // useState to keep track of state changes
    const [isActive, setIsActive] = useState(false);

    // when the user clicks the menu button it dropsdown or closes the menu dropdown
    const menuDropdown = () => {
        setIsActive((prevIsActive) => !prevIsActive);
    };

    // if the screen is adjusted too much when the menu disappears hide the children of the menu
    const handleResize = () => {
        if (window.innerWidth > 850) {
            setIsActive(false);
        }
    };

    // to check the current screen size
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
                    {token !== null &&
                        <li className="profile-middle-li">
                            <Link className="to-page" to="/profile">Profile</Link>
                        </li>
                    }
                </ul>
            </div>
            <div className="menu-nav-cont">
                <div id="menu" className="menu-nav-closed" onClick={menuDropdown}>
                    <li className="menu-text">Menu</li>
                    <div className="menu-icon-img"></div>
                </div>
            </div>
            <div className="menu-nav-list-cont" style={{ display: isActive ? "flex" : "none"}}>
                <ul className="menu-nav-list">
                    <li className="home-menu-li">
                        <Link className="menu-home-to-page" to="/"><strong>Home</strong></Link>
                    </li>
                    <li className="contact-menu-li">
                        <Link className="menu-contact-to-page" to="/contact"><strong>Contact|Us</strong></Link>
                    </li>
                    <li className="lakes-menu-li">
                        <Link className="menu-lakes-to-page" to="/lakes"><strong>Lakes|&|Reservoirs</strong></Link>
                    </li>
                    <li className="gallery-menu-li">
                        <Link className="menu-gallery-to-page" to="/gallery"><strong>Gallery</strong></Link>
                    </li>
                    {token !== null &&
                        <li className="profile-menu-li">
                            <Link className="menu-profile-to-page" to="/profile"><strong>Profile</strong></Link>
                        </li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default MiddleNavbar;