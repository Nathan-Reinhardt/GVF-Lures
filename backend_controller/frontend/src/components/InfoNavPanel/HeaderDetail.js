import React, { Component } from 'react';   // NOTE: IMAGES Import is never used, but it is actually
import { Link } from 'react-router-dom';    // being used by webpack to make it readable to the browser

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