import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MiddleNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="middle-nav-cont">
                <ul className="middle-nav-list">
                    <li className="home-middle-li">
                        <Link className="to-home" to="/">Home</Link>
                    </li>
                    <li className="contact-middle-li">
                        <Link className="to-contact-us" to="/contact">Contact Us</Link>
                    </li>
                    <li className="lakes-middle-li">
                        <Link className="to-lakes" to="/">Lakes</Link>
                    </li>
                    <li className="gallery-middle-li">
                        <Link className="to-gallery" to="/">Gallery</Link>
                    </li>
                </ul>
            </div>
        );
    };
};