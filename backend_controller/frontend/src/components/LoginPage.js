import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="login-page-container">
                <p>This is the login page!</p>
            </div>
        );
    }
}