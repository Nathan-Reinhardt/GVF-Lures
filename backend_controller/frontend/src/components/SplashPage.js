import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';
import IMAGES from './_images';     // NOTE: IMAGES Import is never used, but it is actually
                                    // being used by webpack to make it readable to the browser
const SplashPage = () => {
    
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem("authTokens");   // if token is null don't add an element

    return(
        <div>
            <InfoNavPanel />
            {token === null && <></>}
            {token !== null &&
            <>
                <h1 className="welcome-message">Welcome {user.username}!</h1>
            </>
            }
            <div className="splash-container">
                <div className="home-content-cont">
                    <div className="SLIDE-HOME"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SplashPage;