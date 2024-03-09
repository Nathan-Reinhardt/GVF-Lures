import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const token = localStorage.getItem("authTokens");

        return(
            <div className="whole-footer-cont">
                <div className="footer-line-cont">
                    <div className="footer-line"></div>
                </div>
                <div className="main-footer">
                    <div className="sub-footer">
                        <Link className="f-to-page" to="/">Home</Link>
                        <div className="f-slash-cont">
                            <h3 className="f-slash-vertical-line">|</h3>
                        </div>
                        <Link className="f-to-page" to="/shop">Shop</Link>
                        <div className="f-slash-cont">
                            <h3 className="f-slash-vertical-line">|</h3>
                        </div>
                        <Link className="f-to-page" to="/contact">Contact Us</Link>
                        <div className="f-slash-cont">
                            <h3 className="f-slash-vertical-line">|</h3>
                        </div>
                        <Link className="f-to-page" to="/lakes">Lakes & Reservoirs</Link>
                        <div className="f-slash-cont">
                            <h3 className="f-slash-vertical-line">|</h3>
                        </div>
                        <Link className="f-to-page" to="/gallery">Gallery</Link>
                        {/*
                        For profile page for users
                            {token !== null &&
                            <>
                                <div className="f-slash-cont">
                                    <h3 className="f-slash-vertical-line">|</h3>
                                </div>
                                <Link className="f-to-page" to="/profile">Profile</Link>
                            </>
                            }
                        */}
                    </div>
                </div>
                <div className="copyright-cont">
                    <p className="copyright-2024-text">© 2024</p>
                    <Link className="f-to-page" target={"_blank"} to="/">GVF Lures</Link>
                </div>
            </div>        
        );
    };
};