import React, { useContext, useEffect } from 'react';
import InfoNavPanel from '../InfoNavPanel/InfoNavPanel';
import Footer from '../InfoNavPanel/Footer';
import ProductContext from '../../context/ProductContext';
import { PRODUCTS } from './Products';
import AddToCartPanel from './AddToCartPanel';

const AddToCartPage = () => {

    // Product Context
    const { currentProduct, setCurrentProduct } = useContext(ProductContext);
    const { hasDodger, setHasDodger } = useContext(ProductContext);

    // Ensure currentProduct is set when component mounts
    useEffect(() => {
        // Get the product ID from the URL
        const productId = window.location.pathname.split('/').pop();
        // Find the product index in PRODUCTS array
        const productIndex = PRODUCTS.findIndex(product => product.id.toString() === productId);
        // If productIndex is valid, set it as the current product
        if (productIndex !== -1) {
            setCurrentProduct(productIndex);
            setHasDodger(PRODUCTS[productIndex].dodger ? true : false);
        }
    }, [setCurrentProduct, setHasDodger]);

    // Handle cases where currentProduct is not set yet
    if (currentProduct === null) {
        return <div className="product-loading">Loading...</div>;
    }
    
    return (
        <div>
            <InfoNavPanel />
            <div className="add-cart-main-cont">
                <AddToCartPanel currentProduct={currentProduct} isDodger={false}/>
                {hasDodger &&
                    <AddToCartPanel currentProduct={currentProduct} isDodger={true}/>
                }
            </div>
            <Footer />
        </div>
    );
};

export default AddToCartPage;