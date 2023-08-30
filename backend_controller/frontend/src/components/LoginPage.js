import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const LoginPage = () => {

    const {loginUser} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;  // request.POST.get("email") > name="email"
        const password = e.target.password.value;

        email.length > 0 && loginUser(email, password);

        console.log(email);
        console.log(password);
    }

    return(
        <div className="login-page-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1 className="login-label">Log In</h1>
                <div className="email-cont">
                    <input className="session-input" 
                        type="text"
                        placeholder="Email address"
                        name="email"
                    />
                </div>
                <div className="password-cont">
                    <input className="session-input-password" 
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                </div>
                <div className="submit-cont">
                    <button className="login-submit-btn" type="submit">Submit</button>
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
};

export default LoginPage;