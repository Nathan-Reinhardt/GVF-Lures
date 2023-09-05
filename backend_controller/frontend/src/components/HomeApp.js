import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";       // protects routes from being accessed if not logged in
import ProtectedRoute from '../utils/ProtectedRoute';   // protects routes from being accessed when logged in
import { AuthProvider } from '../context/AuthContext';
import Dashboard from './Dashboard';    // this component is to test private routes
import SplashPage from './SplashPage';  // main home page
import LoginPage from './LoginPage';    // login page
import SignUpPage from './SignUpPage';  // sign up page
import AboutPage from './AboutPage';    // about us page

export default class HomeApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <AuthProvider>
                    <Switch>
                        <Route exact={true} path="/" component={SplashPage} />
                        <Route exact={true} path="/about" component={AboutPage} />
                        <ProtectedRoute path="/login" component={LoginPage} />
                        <ProtectedRoute path="/signup" component={SignUpPage} />
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    </Switch>
                </AuthProvider>
            </Router>
        );
    };
};