import React from 'react';
import { Link } from 'react-router-dom';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';
import { PRODUCTS } from './ShopPanel/Products';

const ShopPage = () => {
    // when coming back make sure to test mobile adjustments later
    // mainly once the new images are created and finalization of base css

    // things to change:
    // possibly switch from grid if needed to center items better
    // wrap link around whole container
    // add cart page needs to have a backspace button to go back to /shop

    return (
        <div>
            <InfoNavPanel />
            <h1 className="shop-title">Lures & Dodgers</h1>
            <div className="shop-wrapper">
                <div className="shop-cont">
                    <div className="products-cont">
                        {
                            PRODUCTS.map((product, index) => (
                                <div key={index} id={index} className="product-item">
                                    <Link className="shop-product-link" to={`/shop/${product.id}`}>
                                        <div className="product-link-cont">
                                            <img className="shop-list-product-img" src={product.productImage}/>
                                        </div>
                                        <h3 className="shop-list-product-name">{product.productName}</h3>
                                        <h3 className="shop-list-price">${product.price}</h3>
                                    </Link>
                                </div>
                            ))
                        }
                        {
                            PRODUCTS.map((product, index) => (
                                product.dodger && (
                                    <div key={index + 'dodger'} className="product-item">
                                        <div className="product-link-cont">
                                            <Link className="shop-product-link" to={`/shop/${product.id}`}>
                                                <img className="shop-list-product-img" src={product.dodger.productImage}/>
                                            </Link>
                                        </div>
                                        <h3 className="shop-list-product-name">{product.dodger.productName}</h3>
                                        <h3 className="shop-list-price">${product.dodger.price}</h3>
                                    </div>
                                )
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ShopPage;