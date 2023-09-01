import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default class SplashPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="splash-container">
                <Navbar />
                <div className="gvf-logo-container">
                    <Link className="site-title" to="/">GVF Lures</Link>
                    <div className="phone-num-cont">
                        <h3 className="red-phone-icon">&#128222;</h3>
                        <h3 className="contact-number">(916) 531-6011</h3>
                    </div>
                </div>
                <div className="">

                </div>
            </div>
        );
    }
}