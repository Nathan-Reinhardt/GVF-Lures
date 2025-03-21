import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    // This page is just a placeholder for the shop while Rich is gone

    render() {
        return (
            <div>
                <InfoNavPanel />
                <h1 className="contact-us-title">Fishing Trip</h1>
                <div className="contact-cont">
                    <div className="background-contact-info-cont">
                        <div className="contact-info-cont">
                            <h1 className="contact-phone-num">Shop Page is temporarily closed</h1>
                            <h1 className="contact-phone-num">I am currently away on a fishing trip</h1>
                            <h1 className="contact-phone-num">Use the Contact Page to reach out</h1>
                            <h1 className="contact-phone-num">Contact Link: <Link to="/contact">Contact Us</Link></h1>
                            <h1 className="contact-phone-num">Sorry for any inconvenience</h1>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
};