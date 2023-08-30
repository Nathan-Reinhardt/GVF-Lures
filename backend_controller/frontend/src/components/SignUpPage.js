import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const SignUpPage = () => {

    const {loginUser} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;  // request.POST.get("email") > name="email"
        const password = e.target.password.value;

        email.length > 0 && loginUser(email, password);

        console.log(email);
        console.log(password);
    }

    return (
        <div className="signup-page-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1 className="signup-label">Sign Up</h1>
                <div className="email-cont">
                    <input className="session-input" 
                        type="text"
                        placeholder="Email address"
                        name="email"
                    />
                </div>
                <div className="username-cont">
                    <input className="session-input" 
                        type="text"
                        placeholder="Username"
                        name="username"
                    />
                </div>
                <div className="password-cont">
                    <input className="session-input" 
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                </div>
                <div className="password-check-cont">
                    <input className="session-input" 
                        type="password"
                        placeholder="Comfirm Password"
                        name="password2"
                    />
                </div>
                <div className="submit-cont">
                    <button className="login-submit-btn" type="submit">Register</button>
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