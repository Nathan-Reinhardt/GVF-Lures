// React / Important Files
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Providers
import { ProductProvider } from '../context/ProductContext';
import { AuthProvider } from '../context/AuthContext';
// AuthProvider currently not being used, only for users

// Pages
import SplashPage from './SplashPage';  // main home page
import ContactUsPage from './ContactUsPage';    // about us page
import LakesPage from './LakesPage';    // lakes page
import GalleryPage from './GalleryPage';    // gallery page
import ShopPage from './ShopPage';      // shop page
import AddToCartPage from './ShopPanel/AddToCartPage';  // add to cart page

// Unused Important Files
{/*
    import PrivateRoute from "../utils/PrivateRoute";       // protects routes from being accessed if not logged in
    import ProtectedRoute from '../utils/ProtectedRoute';   // protects routes from being accessed when logged in
*/}

// Unused Pages
{/*
    import Dashboard from './Dashboard';    // this component is to access admin panel
    import SessionPage from './SessionPage';    // login and sign up pages
    import ProfilePage from './ProfilePage';    // profile page
    import ForgotPasswordPage from './ForgotPasswordPage'   // forgot password page
*/}

export default class HomeApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <AuthProvider>
                    <ProductProvider>
                        <Switch>
                            <Route exact={true} path="/" component={SplashPage} />
                            <Route exact={true} path="/contact" component={ContactUsPage} />
                            <Route exact={true} path="/lakes" component={LakesPage} />
                            <Route exact={true} path="/gallery" component={GalleryPage} />
                            <Route exact={true} path="/shop" component={ShopPage} />
                            <Route exact={true} path="/shop/:productId" component={AddToCartPage} />
                            {/*
                                Routes that are disabled for now
                                
                                <PrivateRoute exact={true} path="/profile" component={ProfilePage} />
                                <ProtectedRoute path="/login"><SessionPage isLogin={true}/></ProtectedRoute>
                                <ProtectedRoute path="/signup"><SessionPage isLogin={false}/></ProtectedRoute>
                                <ProtectedRoute path="/forgot-password" component={ForgotPasswordPage}></ProtectedRoute>
                                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                            */}
                        </Switch>
                    </ProductProvider>
                </AuthProvider>
            </Router>
        );
    };
};