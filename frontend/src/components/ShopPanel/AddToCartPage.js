import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfoNavPanel from '../InfoNavPanel/InfoNavPanel';
import Footer from '../InfoNavPanel/Footer';
import ProductContext from '../../context/ProductContext';
import { PRODUCTS } from './Products';
import AddToCartPanel from './AddToCartPanel';

const AddToCartPage = () => {

    // Product Context
    const { currentProduct, setCurrentProduct, hasSpinBug, setHasSpinBug,
        hasDodger, setHasDodger, hasFlorescent, setHasFlorescent,
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
            setHasFlorescent(!!product.florescent);
            setHasMoreLures(!!product.moreLures);
        }
    }, [setCurrentProduct, setHasSpinBug, setHasDodger, setHasFlorescent, setHasMoreLures]);

    // Handle cases where currentProduct is not set yet
    if (currentProduct === null) {
        return  <div>
                    <InfoNavPanel />
                    <div className="add-cart-main-cont">
                        <div className="product-loading">This Product doesn't exist</div>
                    </div>
                    <Footer />
                </div>;
    }
    
    return (
        <div>
            <InfoNavPanel />
            <div className="add-cart-main-cont">
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
                {!hasSpinBug &&
                    <AddToCartPanel
                        currentProduct={currentProduct} isSpinBug={false} isDodger={false}
                        isFlorescent={false} isSmallDodger={false} isMoreLures={false}
                    />
                }
                {hasSpinBug &&
                    <AddToCartPanel
                        currentProduct={currentProduct} isSpinBug={true} isDodger={false}
                        isFlorescent={false} isSmallDodger={false} isMoreLures={false}
                    />
                }
                {hasMoreLures &&
                    <AddToCartPanel
                        currentProduct={currentProduct} isSpinBug={false} isDodger={false}
                        isFlorescent={false} isSmallDodger={false} isMoreLures={true}
                    />
                }
                {hasFlorescent &&
                    <AddToCartPanel
                        currentProduct={currentProduct} isSpinBug={false} isDodger={false}
                        isFlorescent={true} isSmallDodger={false} isMoreLures={false}
                    />
                }
                {hasDodger &&
                    <AddToCartPanel
                        currentProduct={currentProduct} isSpinBug={false} isDodger={true}
                        isFlorescent={false} isSmallDodger={false} isMoreLures={false}
                    />
                }
            </div>
            <Footer />
        </div>
    );
};

export default AddToCartPage;