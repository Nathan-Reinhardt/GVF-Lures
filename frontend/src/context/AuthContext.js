import React, {createContext, useState, useEffect} from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    
    // Ensures that the URL is changed from local to live enviornments
    let BASE_URL;
    if (process.env.NODE_ENV === 'development') {
        // Development enviornment
        BASE_URL = "http://127.0.0.1:8000/";
    } else {
        // Production environment
        BASE_URL = "https://www.gvflures.com/";
    }
    
    // setting the state in react
    const [authTokens, setAuthTokens] = useState(() => 
        localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem("authTokens"))
            : null
    )

    const [user, setUser] = useState(() => 
        localStorage.getItem("authTokens")
            ? jwt_decode(localStorage.getItem("authTokens"))
            : null
    )

    const [loading, setLoading] = useState(true);

    const history = useHistory();

    // log in user function
    const loginUser = async (email, password) => {
        const response = await fetch(`${BASE_URL}backend/token/`, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await response.json();

        // history.push change it in the future if you want the user to be on a specific page when they log in
        if (response.status === 200) {
            console.log("Logged In");
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem("authTokens", JSON.stringify(data));
            history.push("/");
            return "";
        }
        else {
            console.log(response.status);
            console.log("there was a server issue...");
            // error message for trying to login
            const errorMessage = "Email or Password is incorrect.\nPlease try again."
            console.log(errorMessage);
            return errorMessage;
        }
    }

    // sign up a user function
    const signUpUser = async (email, username, password, password2) => {
        const response = await fetch(`${BASE_URL}backend/register/`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email, username, password, password2
            })
        })

        if (response.status === 201) {
            // change this based on where you want the user to go after they signup
            return "";
        }
        else {
            console.log(response.status);
            console.log("there was a server issue");
            // error message for trying to signup
            const errorMessage = "This Account already exists.\nPlease try again."
            console.log(errorMessage);
            return errorMessage;
        }
    }

    // log out function
    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        // change depending on where you want the user to go after they are logged out
        history.push("/login");
    }

    // verify users when they create their account
    // users should not be logged in when verifying them!
    // change code in 200 block depending on how the automated email works
    const verifyUser = async (user_id, verified_status) => {
        const response = await fetch(`${BASE_URL}backend/update_verification/`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                user_id, verified_status
            })
        })

        if (response.status === 200) {
            console.log("success on verifiying user");
        }
        else {
            console.log(response.status);
            console.log("error in verification of user");
        }
    }

    // passing all the functions into the store to return for export
    const ContextData = {
        user,
        setUser,
        authTokens,
        setAuthTokens,
        signUpUser,
        loginUser,
        logoutUser,
        verifyUser
    }

    // whenever authTokens is changed this runs to check for an auth token
    useEffect(() => {
        if (authTokens) {
            setUser(jwt_decode(authTokens.access));
        }
        setLoading(false);
    }, [authTokens, loading]);

    // returning the store
    return (
        <AuthContext.Provider value={ContextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}