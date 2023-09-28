import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="main-footer">
                <div className="sub-footer">
                    <div>
                        <Link className="f-to-shop" to="/">Shop</Link>
                    </div>
                    <div className="f-slash-cont">
                        <h3 className="f-slash-vertical-line">|</h3>
                    </div>
                    <div>
                        <Link className="f-to-home" to="/">Home</Link>
                    </div>
                    <div className="f-slash-cont">
                        <h3 className="f-slash-vertical-line">|</h3>
                    </div>
                    <div>
                        <Link className="f-to-contact-us" to="/contact">Contact Us</Link>
                    </div>
                    <div className="f-slash-cont">
                        <h3 className="f-slash-vertical-line">|</h3>
                    </div>
                    <div>
                        <Link className="f-to-lakes" to="/">Lakes</Link>
                    </div>
                    <div className="f-slash-cont">
                        <h3 className="f-slash-vertical-line">|</h3>
                    </div>
                    <div>
                        <Link className="f-to-gallery" to="/">Gallery</Link>
                    </div>
                </div>
                <div className="copyright-cont">

                </div>
            </div>
        );
    }
}