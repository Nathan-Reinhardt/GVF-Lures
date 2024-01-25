import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <InfoNavPanel />
                <div className="dashboard-page-container">
                    <div className="dashboard-text-cont">
                        <h1 className="dash-title">DASHBOARD PAGE!</h1>
                        <div className="admin-link-cont">
                            <Link className="to-admin" to="/admin">|___|Admin Panel|___|</Link>
                        </div>
                        <div className="reload-cont">
                            <h1 className="reload-text">Reload|Reload|Reload</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};