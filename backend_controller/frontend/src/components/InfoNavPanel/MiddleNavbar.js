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
                    <li className="shop-middle-li">
                        <Link className="to-shop" to="/">Shop</Link>
                    </li>
                    <li className="home-middle-li">
                        <Link className="to-home" to="/">Home</Link>
                    </li>
                    <li className="about-middle-li">
                        <Link className="to-about-us" to="/about">About Us</Link>
                    </li>
                    <li className="gallery-middle-li">
                        <Link className="to-gallery" to="/">Gallery</Link>
                    </li>
                </ul>
            </div>
        );
    };
};