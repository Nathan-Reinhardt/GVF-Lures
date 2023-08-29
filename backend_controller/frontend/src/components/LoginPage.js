import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="login-page-container">
                <form className="login-form">
                    <h1 className="login-label">Log In</h1>
                    <div className="email-cont">
                        <input className="session-input" type="text"
                            placeholder="Email address"
                            value=""
                        />
                    </div>
                    <div className="password-cont">
                        <input className="session-input-password" type="password"
                            placeholder="Password"
                            value=""
                        />
                    </div>
                    <div className="submit-cont">
                        <button className="login-submit-btn">Submit</button>
                    </div>
                    <h3 className="forgot-password">Forgot password?</h3>
                    <div className="form-line"></div>
                    <h3 className="not-member">Not a GVF Lure member?</h3>
                    <div className="form-bottom-container">
                        <Link className="to-sign-up" to="/signup">Sign up here.</Link>
                    </div>
                </form>
            </div>
        );
    }
}