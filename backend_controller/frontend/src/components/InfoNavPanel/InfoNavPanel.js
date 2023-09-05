import React, { Component } from 'react';
import TopNavbar from './TopNavbar';
import HeaderDetail from './HeaderDetail';
import MiddleNavbar from './MiddleNavbar';

export default class InfoNavPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <TopNavbar />
                <HeaderDetail />
                <MiddleNavbar />
            </div>
        );
    }
}