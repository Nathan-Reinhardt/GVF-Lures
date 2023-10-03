import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';

export default class LakesPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <InfoNavPanel />
                <div className="lakes-container">
                    <h1 className="lakes-text">Lakes Page</h1>
                </div>
            </div>
        );
    }
}