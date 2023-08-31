import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";
import ProtectedRoute from '../utils/ProtectedRoute';
import { AuthProvider } from '../context/AuthContext';
import Dashboard from './Dashboard';    // this component is to test private routes
import SplashPage from './SplashPage';  // main home page
import LoginPage from './LoginPage';    // login page
import SignUpPage from './SignUpPage';  // sign up page

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
                        <ProtectedRoute path="/login" component={LoginPage} />
                        <ProtectedRoute path="/signup" component={SignUpPage} />
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    </Switch>
                </AuthProvider>
            </Router>
        );
    };
};