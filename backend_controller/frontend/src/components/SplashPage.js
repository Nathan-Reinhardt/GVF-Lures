import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import HeaderDetail from './HeaderDetail';
import MiddleNavbar from './MiddleNavbar';

export default class SplashPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <TopNavbar />
                <HeaderDetail />
                <MiddleNavbar />
                <div className="splash-container">

                </div>
            </div>
        );
    }
}