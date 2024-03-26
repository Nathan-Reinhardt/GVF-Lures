import React from 'react';
import { Link } from 'react-router-dom';

const BackToShop = () => {

    return (
        <div className="back-to-shop-page-cont">
            <Link className="back-to-shop-page" to="/shop">
                <div className="back-to-shop-page-sub-cont">
                    <div className="back-to-shop-img-cont">
                        <div className="back-to-shop-img"></div>
                    </div>
                    <h3 className="back-to-shop-text">Back To Shop</h3>
                </div>
            </Link>
        </div>
    );
};

export default BackToShop;