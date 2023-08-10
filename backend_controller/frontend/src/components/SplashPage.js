import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default class SplashPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Navbar />
                <Link className="site-title" to="/">GVF Lures</Link>
            </div>
        );
    }
}