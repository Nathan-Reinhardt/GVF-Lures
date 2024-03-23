import React, { useContext, useEffect } from 'react';
import InfoNavPanel from '../InfoNavPanel/InfoNavPanel';
import Footer from '../InfoNavPanel/Footer';
import BackToShop from './BackToShop';
import ProductContext from '../../context/ProductContext';
import { PRODUCTS } from './Products';
import AddToCartPanel from './AddToCartPanel';

const AddToCartPage = () => {

    // Product Context
    const { currentProduct, setCurrentProduct, hasSpinBug, setHasSpinBug,
        hasDodger, setHasDodger, hasFlourescent, setHasFlourescent,
        hasMoreLures, setHasMoreLures } = useContext(ProductContext);

    // Ensure currentProduct is set when component mounts
    useEffect(() => {
        // Get the product ID from the URL
        const productId = window.location.pathname.split('/').pop();
        // Find the product index in PRODUCTS array
        const productIndex = PRODUCTS.findIndex(product => product.id.toString() === productId);
        // If productIndex is valid, set it as the current product
        if (productIndex !== -1) {
            setCurrentProduct(productIndex);
            const product = PRODUCTS[productIndex];
            setHasSpinBug(!!product.spinBug);
            setHasDodger(!!product.dodger);
            setHasFlourescent(!!product.flourescent);
            setHasMoreLures(!!product.moreLures);
        }
    }, [setCurrentProduct, setHasSpinBug, setHasDodger, setHasFlourescent, setHasMoreLures]);

    // Handle cases where currentProduct is not set yet
    if (currentProduct === null) {
        return  <div>
                    <InfoNavPanel />
                    <div className="product-non-exist-cont">
                        <div className="product-loading">This Product doesn't exist</div>
                        <BackToShop />
                    </div>
                    <Footer />
                </div>;
    }
    
    return (
        <div>
            <InfoNavPanel />
            <div className="add-cart-main-cont">
                <BackToShop />
                {!hasSpinBug &&
                    <AddToCartPanel
                        currentProduct={currentProduct} isSpinBug={false} isDodger={false}
                        isFlourescent={false} isSmallDodger={false} isMoreLures={false}
                    />
                }
                {hasSpinBug &&
                    <AddToCartPanel
                        currentProduct={currentProduct} isSpinBug={true} isDodger={false}
                        isFlourescent={false} isSmallDodger={false} isMoreLures={false}
                    />
                }
                {hasMoreLures &&
                    <AddToCartPanel
                        currentProduct={currentProduct} isSpinBug={false} isDodger={false}
                        isFlourescent={false} isSmallDodger={false} isMoreLures={true}
                    />
                }
                {hasFlourescent &&
                    <AddToCartPanel
                        currentProduct={currentProduct} isSpinBug={false} isDodger={false}
                        isFlourescent={true} isSmallDodger={false} isMoreLures={false}
                    />
                }
                {hasDodger &&
                    <AddToCartPanel
                        currentProduct={currentProduct} isSpinBug={false} isDodger={true}
                        isFlourescent={false} isSmallDodger={false} isMoreLures={false}
                    />
                }
            </div>
            <Footer />
        </div>
    );
};

export default AddToCartPage;