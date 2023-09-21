import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';

export default class ContactUsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <InfoNavPanel />
                <div className="contact-container">
                    <h1 className="contact-us-text">Contact Us</h1>
                </div>
            </div>
        );
    }
}