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
                    <li className="middle-li">Shop</li>
                    <li className="middle-li">Home</li>
                    <li className="middle-li">About Us</li>
                    <li className="middle-li">Gallery</li>
                </ul>
            </div>
        );
    };
};