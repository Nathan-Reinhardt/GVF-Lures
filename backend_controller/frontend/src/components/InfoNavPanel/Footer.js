import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="main-footer">
                    <div className="sub-footer">
                        <Link className="f-to-shop" to="/">Shop</Link>
                        <div className="f-slash-cont">
                            <h3 className="f-slash-vertical-line">|</h3>
                        </div>
                        <Link className="f-to-home" to="/">Home</Link>
                        <div className="f-slash-cont">
                            <h3 className="f-slash-vertical-line">|</h3>
                        </div>
                        <Link className="f-to-contact-us" to="/contact">Contact Us</Link>
                        <div className="f-slash-cont">
                            <h3 className="f-slash-vertical-line">|</h3>
                        </div>
                        <Link className="f-to-lakes" to="/">Lakes</Link>
                        <div className="f-slash-cont">
                            <h3 className="f-slash-vertical-line">|</h3>
                        </div>
                        <Link className="f-to-gallery" to="/">Gallery</Link>
                    </div>
                </div>
                <div className="copyright-cont">
                    <p className="copyright-2023-text">© 2023</p>
                    <Link className="f-to-new-tab" target={"_blank"} to="/">GVF Lures</Link>
                </div>
            </div>        
        );
    }
}