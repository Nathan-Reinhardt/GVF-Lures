import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { EssentialMedia } from '../../utils/_essentialmedia';

export default class HeaderDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="gvf-logo-cont">
                    <Link className="site-logo-link" to="/">
                        <img className="gvf-lures-logo-image" src={EssentialMedia[0].url} />
                    </Link>
                </div>
                <div className="gvf-lures-text-cont">
                    <p className="main-gvf-lures-text"><strong>GVF Lures</strong></p>
                </div>
            </div>
        );
    };
};