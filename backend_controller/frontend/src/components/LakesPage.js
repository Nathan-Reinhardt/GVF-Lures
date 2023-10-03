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
                    <div className="title-cont">
                        <h1 className="lakes-title">Lakes</h1>
                    </div>
                </div>
            </div>
        );
    }
}