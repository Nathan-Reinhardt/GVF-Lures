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
                    <li className="middle-li">Home</li>
                </ul>
            </div>
        );
    };
};