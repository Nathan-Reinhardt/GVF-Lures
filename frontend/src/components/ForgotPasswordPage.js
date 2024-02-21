import React, { useState, useContext, useEffect } from 'react';
import validator from 'validator';
import AuthContext from '../context/AuthContext';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';

const ForgotPasswordPage = () => {

    // while working on shop page and you come back make sure
    // to create a different ui based on the email status

    // after start working on the reset password page and making
    // sure that the link sent to the user actually redirects them
    // to the new reset password page and also make sure that you can
    // access the payload in the url for password changing

    // useState initialization
    const [email, setEmail] = useState("");
    const [sendEmailStatus, setSendEmailStatus] = useState(false);

    // authContext functions
    const {checkAccountStatus} = useContext(AuthContext);
    const {sendMailToUser} = useContext(AuthContext);

    // error messages
    const [errorMessage, setErrorMessage] = useState("");

    const forgotPasswordHandleSubmit = async (e) => {
        e.preventDefault();

        // Validate email using Validator.js
        if (!validator.isEmail(email)) {
            setErrorMessage("Email has invalid format.");
            return;
        }

        const email_status = await checkAccountStatus(email);

        if (!email_status) {
            setErrorMessage("Account with this email doesn't exist.\nPlease try again.");
        }
        else {
            setErrorMessage("");
        }

        const typeOfMessage = "forgot";
        setSendEmailStatus(await sendMailToUser(email, typeOfMessage));

        if (!sendEmailStatus) {
            setErrorMessage("Email was not sent.\nPlease try again later.");
        }
    };

    // grabs errorDisplays on the page and sets the error message whenever the error message changes
    useEffect(() => {
        const errorDisplay = document.querySelectorAll(".error-message");
        errorDisplay.textContent = errorMessage;
    }, [errorMessage]);

    // change the page depending on when an email is sent or not
    useEffect(() => {
        setErrorMessage("");
    }, [sendEmailStatus]);

    return (
        <div>
            <InfoNavPanel />
            <div className="forgot-password-page-cont">
                {sendEmailStatus == false &&
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
                }
                {sendEmailStatus == true &&
                    <div className="forgot-password-confirmation-cont">
                        Hello There the email has been sent
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
};

export default ForgotPasswordPage;