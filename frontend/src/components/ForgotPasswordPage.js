import React, { useState, useContext, useEffect } from 'react';
import validator from 'validator';
import AuthContext from '../context/AuthContext';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';

const ForgotPasswordPage = () => {

    // useState initialization
    const [email, setEmail] = useState("");

    // authContext functions
    const {checkAccountStatus} = useContext(AuthContext);

    // error messages
    const [errorMessage, setErrorMessage] = useState("");

    const forgotPasswordHandleSubmit = async (e) => {
        e.preventDefault();

        // Validate email using Validator.js
        if (!validator.isEmail(email)) {
            setErrorMessage("Email has invalid format.");
            return;
        }

        const status = await checkAccountStatus(email);
        if (!status) {
            setErrorMessage("Account with this email doesn't exist.\nPlease try again.");
        }
    };

    // grabs errorDisplays on the page and sets the error message whenever the error message changes
    useEffect(() => {
        const errorDisplay = document.querySelectorAll(".error-message");
        errorDisplay.textContent = errorMessage;
    }, [errorMessage]);

    // in the future if you want to add phone number option make sure it is
    // in the database as an optional before being able to use it here

    return (
        <div>
            <InfoNavPanel />
            <div className="forgot-password-page-cont">
                <form className="session-form" onSubmit={forgotPasswordHandleSubmit}>
                    <h1 className="password-recovery-label">Password Reset</h1>
                    <div className="email-cont">
                        <input className="session-input"
                            type="text"
                            placeholder="Email"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    {errorMessage.split('\n').map((line, index) => (
                        <p key={index} className="error-message">{line}</p>
                    ))}
                    <div className="submit-cont">
                        <button className="forgot-password-submit-btn" type="submit">Send</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default ForgotPasswordPage;