import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const SignUpPage = () => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const {signUpUser} = useContext(AuthContext);

    const handleSubmit = async e => {
        e.preventDefault();
        signUpUser(email, username, password, password2);
    };

    return (
        <div className="signup-page-container">
            <form className="signup-form" onSubmit={handleSubmit}>
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
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="password-check-cont">
                    <input className="session-input" 
                        type="password"
                        placeholder="Comfirm Password"
                        onChange={e => setPassword2(e.target.value)}
                    />
                </div>
                <div className="submit-cont">
                    <button className="signin-submit-btn" type="submit">Register</button>
                </div>
                <div className="form-line"></div>
                <h3 className="member">Already a GVF Lure member?</h3>
                <div className="form-bottom-container">
                    <Link className="to-log-in" to="/login">Log In here.</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUpPage;