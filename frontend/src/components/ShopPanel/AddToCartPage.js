import React, { useContext } from 'react';
import InfoNavPanel from '../InfoNavPanel/InfoNavPanel';
import Footer from '../InfoNavPanel/Footer';
import ProductContext from '../../context/ProductContext';
import AddToCartPanel from './AddToCartPanel';

const AddToCartPage = () => {

    // Product Context
    const { hasDodger } = useContext(ProductContext);
    
    return (
        <div>
            <InfoNavPanel />
            <div className="add-cart-lure-cont">
                <AddToCartPanel isDodger={false}/>
            </div>
            {hasDodger &&
                <div className="add-cart-dodger-cont">
                    <AddToCartPanel isDodger={true}/>
                </div>
            }
            <Footer />
        </div>
    );
};

export default AddToCartPage;