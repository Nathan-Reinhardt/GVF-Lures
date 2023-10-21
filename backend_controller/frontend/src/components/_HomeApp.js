// React / Important Files
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";       // protects routes from being accessed if not logged in
import ProtectedRoute from '../utils/ProtectedRoute';   // protects routes from being accessed when logged in
import { AuthProvider } from '../context/AuthContext';

// Pages
import Dashboard from './Dashboard';    // this component is to test private routes
import SplashPage from './SplashPage';  // main home page
import LoginPage from './LoginPage';    // login page
import SignUpPage from './SignUpPage';  // sign up page
import ContactUsPage from './ContactUsPage';    // about us page
import LakesPage from './LakesPage';    // lakes page
import GalleryPage from './GalleryPage';    // gallery page
import ProfilePage from './ProfilePage';    // profile page

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
                        <Route exact={true} path="/contact" component={ContactUsPage} />
                        <Route exact={true} path="/lakes" component={LakesPage} />
                        <Route exact={true} path="/gallery" component={GalleryPage} />
                        <PrivateRoute exact={true} path="/profile" component={ProfilePage} />
                        <ProtectedRoute path="/login" component={LoginPage} />
                        <ProtectedRoute path="/signup" component={SignUpPage} />
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    </Switch>
                </AuthProvider>
            </Router>
        );
    };
};