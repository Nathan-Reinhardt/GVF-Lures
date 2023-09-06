import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IMAGES from '../images/images.js';

export default class HeaderDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="gvf-logo-container">
                <Link className="site-title" to="/">GVF Lures</Link>
                <img scr={IMAGES.GFVLuresLogo} className="gvf-lures-logo-image" alt="" />
                <div className="phone-num-cont">
                    <h3 className="red-phone-icon">&#128222;</h3>
                    <h3 className="contact-number">(916) 531-6011</h3>
                </div>
            </div>
        );
    };
};