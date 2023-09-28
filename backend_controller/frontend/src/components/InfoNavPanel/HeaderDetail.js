import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HeaderDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-detail-container">
                <div className="gvf-logo-container">
                    <div className="gvf-lures-logo-image">
                        <Link className="site-logo-link" to="/"></Link>
                    </div>
                </div>
            </div>
        );
    };
};