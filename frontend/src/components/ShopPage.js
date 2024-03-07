import React from 'react';
import { Link } from 'react-router-dom';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';
import { PRODUCTS } from './ShopPanel/Products';

const ShopPage = () => {

    // things to change:
    // add cart page needs to have a backspace button to go back to /shop

    // For the future implement multiple pages using 1, 2, 3, etc. if enough
    // product is showing to keep the page smaller in size with a lot of product
    // To do this you are probably going to have to keep track of the screen size using
    // useEffect on window change while also changing a state variable based on the screen
    // size to tell React to only render a certain amount of Prodcuts on a single page

    return (
        <div>
            <InfoNavPanel />
            <h1 className="shop-title">Lures & Dodgers</h1>
            <div className="shop-wrapper">
                <div className="shop-cont">
                    <div className="products-cont">
                        {
                            PRODUCTS.map((product, index) => (
                                <Link className="shop-product-link" to={`/shop/${product.id}`}>
                                    <div key={index} id={index} className="product-item">
                                        <div>
                                            <div className="product-link-cont">
                                                <img className="shop-list-product-img" src={product.productImage}/>
                                            </div>
                                            <h3 className="shop-list-product-name">{product.shopName}</h3>
                                        </div>
                                    </div>
                                </Link>
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