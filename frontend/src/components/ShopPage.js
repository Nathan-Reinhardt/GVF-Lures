import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';
import ProductContext from '../context/ProductContext';
import { PRODUCTS } from './ShopPanel/Products';

const ShopPage = () => {

    // Product Context
    const {setCurrentProduct} = useContext(ProductContext);

    return (
        <div>
            <InfoNavPanel />
            <div className="shop-cont">
                {PRODUCTS.map((product, index) => (
                    <div key={index} id={index} className="product-item" onClick={() => setCurrentProduct(index)}>
                        <Link className="shop-product-link" to={/shop/ + product.id}>
                            <img className="shop-list-product-image" src={product.productImage} />
                        </Link>
                        <h3 className="shop-list-product-name">{product.productName}</h3>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default ShopPage;