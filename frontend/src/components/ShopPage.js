import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';

const ShopPage = () => {

    // states

    return (
        <div>
            <InfoNavPanel />
            <div>Hello this is the shop page</div>
            <Footer />
        </div>
    );
};

export default ShopPage;