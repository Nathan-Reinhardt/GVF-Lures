import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';

export default class AboutPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <InfoNavPanel />
                <div className="about-container">
                    <o>ABOUT PAGE IS HERE!!!</o>
                </div>
            </div>
        );
    }
}