import {Route, Redirect} from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

// for my project I will use this to make sure that users can't access certain pages unless they are logged in
const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext);
    return <Route {...rest}>{!user ? <Redirect to="/login" /> : children}</Route>;
}

export default PrivateRoute;