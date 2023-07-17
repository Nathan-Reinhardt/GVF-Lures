import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path='/'><p>This is the homepage</p></Route>
                    <Route path='/login' component={LoginPage} />
                    <Route path='/signup' component={SignUpPage} />
                </Routes>
            </Router>
        )
    }
}