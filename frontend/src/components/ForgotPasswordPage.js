import React, { useState, useEffect } from 'react';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';

const ForgotPasswordPage = () => {

    // useState initialization
    const [email, setEmail] = useState("");

    // error messages
    const [errorMessage, setErrorMessage] = useState("");

    const forgotPasswordHandleSubmit = async (e) => {
        e.preventDefault();

        // const error = await loginUser(email, password);
        setErrorMessage(error);
    };

    // grabs errorDisplays on the page and sets the error message whenever the error message changes
    useEffect(() => {
        const errorDisplay = document.querySelectorAll(".error-message");
        errorDisplay.textContent = errorMessage;
    }, [errorMessage]);

    return (
        <div>
            <InfoNavPanel />
            <div className="forgot-password-page-cont">
                <form className="session-form" onSubmit={forgotPasswordHandleSubmit}>
                    <h1 className="password-recovery-label">Password Recovery</h1>
                    <div className="email-cont">
                        <input className="session-input"
                            type="text"
                            placeholder="Email address"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    {errorMessage.split('\n').map((line, index) => (
                        <p key={index} className="error-message">{line}</p>
                    ))}
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default ForgotPasswordPage;