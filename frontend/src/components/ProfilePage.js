import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';

const ProfilePage = () => {
    
    const {user} = useContext(AuthContext);

    return(
        <div>
            <InfoNavPanel />
            <h1 className="profile-page-title">Profile</h1>
            <div className="profile-page-cont">
                <div className="background-profile-cont">
                    <div className="white-profile-cont">
                        <h1 className="profile-welcome-text">Welcome To Your Profile!</h1>
                        <h1 className="profile-username-text">Username: {user.username}</h1>
                        {user.email.length <= 31 &&
                            <><h1 className="profile-email-text">Email: {user.email}</h1></>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;