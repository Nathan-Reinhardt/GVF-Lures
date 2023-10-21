import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';

const ProfilePage = () => {
    
    const {user} = useContext(AuthContext);

    return(
        <div>
            <InfoNavPanel />
            <div className="profile-container">
                <h1>PROFILE PAGE</h1>
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;