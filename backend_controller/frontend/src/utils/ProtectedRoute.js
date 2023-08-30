import React, { useContext } from "react";
import {Route, Redirect} from "react-router-dom";
import AuthContext from "../context/AuthContext";

// for my project I will use this to make sure that users can't access certain pages unless they are logged out
const ProtectedRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext);
    return <Route {...rest}>{user ? <Redirect to="/" /> : children}</Route>;
}

export default ProtectedRoute;