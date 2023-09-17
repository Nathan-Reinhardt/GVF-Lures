import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';

export default class SplashPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <InfoNavPanel />
                <div className="splash-container">
                    <h1 className="home-page-text">Sanjay OMG!!!</h1>
                </div>
            </div>
        );
    };
};