import React, { Component } from 'react';   // NOTE: IMAGES Import is never used, but it is actually
import { Link } from 'react-router-dom';    // being used by webpack to make it readable to the browser
import IMAGES from '../images/_images';

export default class HeaderDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="gvf-logo-container">
                <div className="gvf-lures-logo-image">
                    <Link className="site-logo-link" to="/"></Link>
                </div>
                <div className="phone-num-cont">
                    <h3 className="red-phone-icon">&#128222;</h3>
                    <h3 className="contact-number">(916) 531-6011</h3>
                </div>
            </div>
        );
    };
};