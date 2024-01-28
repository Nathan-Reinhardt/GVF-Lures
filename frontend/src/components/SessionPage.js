import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';
import { EssentialMedia } from '../utils/_essentialmedia';

const SessionPage = (props) => {

    // useState initialization
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    // session functions
    const {loginUser} = useContext(AuthContext);
    const {signUpUser} = useContext(AuthContext);

    // login user
    const loginHandleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;  // request.POST.get("email") > name="email"
        const password = e.target.password.value;

        email.length > 0 && loginUser(email, password);
    };

    // sign up user
    const signUpHandleSubmit = async e => {
        e.preventDefault();
        signUpUser(email, username, password, password2);
    };

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
            <>
                <div className="login-page-container">
                    <form className="login-form" onSubmit={loginHandleSubmit}>
                        <h1 className="login-label">Log In</h1>
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
                        <div className="submit-cont">
                            <button className="login-submit-btn" type="submit">Sign In</button>
                        </div>
                        <h3 className="forgot-password">Forgot password?</h3>
                        <div className="form-line"></div>
                        <h3 className="not-member">Not a GVF Lure's member?</h3>
                        <div className="form-bottom-container">
                            <Link className="to-sign-up" to="/signup">Sign up here.</Link>
                        </div>
                    </form>
                </div>
            </>
            }
            {props.isLogin == false &&
            <>
                <div className="signup-page-container">
                    <form className="signup-form" onSubmit={signUpHandleSubmit}>
                        <h1 className="signup-label">Sign Up</h1>
                        <div className="email-cont">
                            <input className="session-input"
                                type="email"
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
                        <div className="submit-cont">
                            <button className="signin-submit-btn" type="submit">Register</button>
                        </div>
                        <div className="form-line"></div>
                        <h3 className="member">Already a GVF Lure's member?</h3>
                        <div className="form-bottom-container">
                            <Link className="to-log-in" to="/login">Log In here.</Link>
                        </div>
                    </form>
                </div>
            </>
            }
            <Footer />
        </div>
    );
};

export default SessionPage;