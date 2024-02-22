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

    // getIpAddress
    const getIpAddress = async () => {
        try {
            const response = await fetch(`${BASE_URL}backend/ip_address_check`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            
            if (!response.ok) {
                console.error("Failed to fetch IP address:", response.statusText);
                return false;
            }

            const data = await response.json();
            console.log("Response Data:", data.client_ip); // Log the entire response
            console.log("Is Routable?", data.is_routable);

            return data.client_ip;
        } 
        catch (error) {
            console.log("Error fetching IP address:", error.message);
        }
    }

    // takes in inputs to check if the inputs given match an account within the database
    // update method to include phone number in the future
    const checkAccountStatus = async (email) => {
        const response = await fetch(`${BASE_URL}backend/email_check/?email=${email}`, {
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            }
        })

        if (response.status === 200) {
            console.log("success on finding account");
            return true;
        }
        else {
            console.log(response.status);
            console.log("account with this email doesn't exist");
            return false;
        }
    }

    // verify users when they create their account
    // FUTURE implementation:
    // When a user creates an account send a welcome message and ask them to verify their email address
    // if they don't that is ok, they can always request a new email for verification in the future
    // this is mainly there to make sure the user knows that they have the right email address tied.
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

    // send automated emails to users
    const sendMailToUser = async (recipient_email, typeOfMessage) => {
        const response = await fetch(`${BASE_URL}backend/send_email/`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                recipient_email, typeOfMessage
            })
        })

        if (response.status === 200) {
            console.log("success on email sent");
            return true;
        }
        else {
            console.log(response.status);
            console.log("error in sending email to user");
            return false;
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
        getIpAddress,
        checkAccountStatus,
        verifyUser,
        sendMailToUser
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