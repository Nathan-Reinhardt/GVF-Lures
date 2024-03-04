import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';
import { PRODUCTS } from './ShopPanel/Products';

const ShopPage = () => {
    // when coming back make sure to update a lot of css and add in 2 more lures/dodgers

    return (
        <div>
            <InfoNavPanel />
            <div className="shop-cont">
                {PRODUCTS.map((product, index) => (
                    <div key={index} id={index} className="product-item">
                        <Link className="shop-product-link" to={`/shop/${product.id}`}>
                            <img className="shop-list-product-image" src={product.productImage}/>
                        </Link>
                        <h3 className="shop-list-product-name">{product.productName}</h3>
                        <h3 className="shop-list-price">${product.price}</h3>
                    </div>
                ))}
                {PRODUCTS.map((product, index) => (
                    product.dodger && (
                        <div key={index + 'dodger'} className="product-item">
                            <Link className="shop-product-link" to={`/shop/${product.id}`}>
                                <img className="shop-list-product-image" src={product.dodger.productImage}/>
                            </Link>
                            <h3 className="shop-list-product-name">{product.dodger.productName}</h3>
                            <h3 className="shop-list-price">${product.dodger.price}</h3>
                        </div>
                    )
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default ShopPage;