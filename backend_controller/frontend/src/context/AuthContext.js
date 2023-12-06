import React, {createContext, useState, useEffect} from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
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
        const response = await fetch("http://127.0.0.1:8000/backend/token/", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await response.json();

        // log the data for testing purposes
        //console.log(data);

        // history.push change it in the future if you want the user to be on a specific page when they log in
        if (response.status === 200) {
            console.log("Logged In");
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem("authTokens", JSON.stringify(data));
            history.push("/");
        }
        else {
            console.log(response.status);
            console.log("there was a server issue...");
            alert("Email or Password is incorrect please try again.");
        }
    }

    // *IMPORTANT* --> in the response variable fields for signup and login, make sure when deploying the application
    // to a live server and not based on local host you change all fetch links to grab the server hosted links
    // links are in this file and also in useAxios.js

    // sign up a user function
    const signUpUser = async (email, username, password, password2) => {
        const response = await fetch("http://127.0.0.1:8000/backend/register/", {
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
            history.push("/login");
        }
        else {
            console.log(response.status);
            console.log("there was a server issue");
            alert("Something went wrong " + response.status);
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

    // passing all the functions into the store to return for export
    const ContextData = {
        user,
        setUser,
        authTokens,
        setAuthTokens,
        signUpUser,
        loginUser,
        logoutUser
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