import React, { useState, useContext, useEffect } from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import checkLSToken from '../utils/_zzzToken';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';
import { EssentialMedia } from '../utils/_essentialmedia';

const SessionPage = (props) => {

    // useState initialization
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    // session functions
    const {loginUser} = useContext(AuthContext);
    const {signUpUser} = useContext(AuthContext);
    const {getIpAddress} = useContext(AuthContext);

    // password visible
    const [passwordVisible, setPasswordVisible] = useState(false);

    // error messages
    const [errorMessage, setErrorMessage] = useState("");

    // login user
    const loginHandleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;  // request.POST.get("email") > name="email"
        const password = e.target.password.value;

        // Call the loginUser function
        const error = await loginUser(email, password);
        setErrorMessage(error);
    };

    // sign up user
    const signUpHandleSubmit = async e => {
        e.preventDefault();

        // Validate email using Validator.js
        if (!validator.isEmail(email)) {
            setErrorMessage("Email has invalid format.");
            return;
        }

        // Define a regular expression pattern to match allowed characters
        const usernameRegex = /^[a-zA-Z0-9_-]+$/;
        const passwordRegex = /^[a-zA-Z0-9~`!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/=:;*]+$/;

        if (username.length < 6 || username.length > 20) {
            setErrorMessage("Username needs to be 6-20 characters in length.");
            return;
        }
        if (!usernameRegex.test(username)) {
            setErrorMessage("Username contains invalid characters.");
            return;
        }
        if (password.length < 6) {
            setErrorMessage("Password needs to be 6 or more characters long.");
            return;
        }
        if (!passwordRegex.test(password)) {
            setErrorMessage("Password contains invalid characters.\nPlease try again.");
            return;
        }
        if (password !== password2) {
            setErrorMessage("Passwords don't match.\nPlease try again.");
            return;
        }

        // Prevent Spam
        const ip = await getIpAddress();
        const zzzStatus = await checkLSToken(ip);

        if (zzzStatus != true) {
            setErrorMessage('Account creation limit has been reached.\nPlease try again later.');
            return;
        }

        // after all validations have been checked
        const error = await signUpUser(email, username, password, password2);
        setErrorMessage(error);
    };

    // grabs errorDisplays on the page and sets the error message whenever the error message changes
    useEffect(() => {
        const errorDisplay = document.querySelectorAll(".error-message");
        errorDisplay.textContent = errorMessage;
    }, [errorMessage]);

    // making sure that the state changes between login and sign up pages
    useEffect(() => {
        setPasswordVisible(false);
        setErrorMessage("");
    }, [props.isLogin]);

    // make password input field visible or hidden to the user
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);

        // Find the current image element
        const currentImage = document.getElementById("pi");

        // change the image based on what the current image is
        if (currentImage && currentImage.src === EssentialMedia[5].url) {
            currentImage.src = EssentialMedia[6].url;
        } 
        else if (currentImage) {
            currentImage.src = EssentialMedia[5].url;
        }
    };

    return (
        <div>
            <InfoNavPanel />
            {props.isLogin &&
                <div className="session-page-container">
                    <form className="session-form" onSubmit={loginHandleSubmit}>
                        <h1 className="session-label">Log In</h1>
                        <div className="email-cont">
                            <input className="session-input"
                                type="email"
                                placeholder="Email address"
                                name="email"
                            />
                        </div>
                        <div className="password-cont">
                            <input className="session-input"
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                            />
                            <img id="pi" className="password-icon"
                                src={EssentialMedia[5].url}
                                onClick={togglePasswordVisibility}
                            />
                        </div>
                        {errorMessage.split('\n').map((line, index) => (
                            <p key={index} className="error-message">{line}</p>
                        ))}
                        <div className="submit-cont">
                            <button className="session-submit-btn" type="submit">Sign In</button>
                        </div>
                        {/*

                        uncomment out once forgot password and rest password is working flawlessly
                        
                        <div className="forgot-password-cont">
                            <Link className="to-forgot-password" to="/forgot-password">Forgot password?</Link>
                        </div>
                        */}
                        <div className="form-line"></div>
                        <h3 className="not-member">Not a GVF Lure's member?</h3>
                        <div className="form-bottom-container">
                            <Link className="to-sign-up" to="/signup">Sign up here.</Link>
                        </div>
                    </form>
                </div>
            }
            {props.isLogin == false &&
                <div className="session-page-container">
                    <form className="session-form" onSubmit={signUpHandleSubmit}>
                        <h1 className="session-label">Sign Up</h1>
                        <div className="email-cont">
                            <input className="session-input"
                                type="text"
                                placeholder="Email address"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="username-cont">
                            <input className="session-input"
                                type="text"
                                placeholder="Username"
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="password-cont">
                            <input className="session-input"
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)}
                            />
                            <img id="pi" className="password-icon"
                                src={EssentialMedia[5].url}
                                onClick={togglePasswordVisibility}
                            />    
                        </div>
                        <div className="password-check-cont">
                            <input className="session-input"
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Comfirm Password"
                                onChange={e => setPassword2(e.target.value)}
                            />
                        </div>
                        {errorMessage.split('\n').map((line, index) => (
                            <p key={index} className="error-message">{line}</p>
                        ))}
                        <div className="submit-cont">
                            <button className="session-submit-btn" type="submit">Register</button>
                        </div>
                        <div className="form-line"></div>
                        <h3 className="member">Already a GVF Lure's member?</h3>
                        <div className="form-bottom-container">
                            <Link className="to-log-in" to="/login">Log In here.</Link>
                        </div>
                    </form>
                </div>
            }
            <Footer />
        </div>
    );
};

export default SessionPage;