import React, { Component } from 'react';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';
import { EssentialMedia } from '../utils/_essentialmedia';

export default class ContactUsPage extends Component {
    constructor(props) {
        super(props);
    }

    // email and phone number are placeholders until further notice

    render() {
        return(
            <div>
                <InfoNavPanel />
                <h1 className="contact-us-title">Contact Us</h1>
                <div className="contact-cont">
                    <div className="background-contact-info-cont">
                        <div className="contact-info-cont">
                            <h1 className="contact-phone-num">Phone Number: 650-218-5784</h1>
                            <h1 className="contact-email">Email: nreinhardt1234@gmail.com</h1>
                            <div className="contact-pic-cont">
                                <img className="rich-n-me-pic" src={EssentialMedia[1].url} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
};