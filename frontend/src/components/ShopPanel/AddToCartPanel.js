import React from 'react';
import { PRODUCTS } from './Products';

const AddToCartPanel = ({ currentProduct, isSpinBug, isDodger, isFlorescent, isMoreLures }) => {

    // later when implementing the changing of images based on selection
    // make sure to use these conditionals below to put the useState
    // functionality to be used based on what type of product it will be for

    // which type of product to create panel for
    let product;
    if (isDodger) {
        product = PRODUCTS[currentProduct].dodger;
    }
    else if (isFlorescent) {
        product = PRODUCTS[currentProduct].florescent;
    }
    else if (isMoreLures) {
        product = PRODUCTS[currentProduct].moreLures;
    }
    else {
        product = PRODUCTS[currentProduct];
    }

    // used to help keep the UI clean for text wrapping
    const ProductTypes = ["Florescent", "More", "Spinbugs", "Dodgers"];
    
    return (
        <div className="add-cart-product-cont">
            <form className="add-cart-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value={product.hosted_button_id} />
                {isFlorescent &&
                    <h1 className="add-cart-product-name-top-type">{ProductTypes[0]}</h1>
                }
                {isMoreLures &&
                    <h1 className="add-cart-product-name-top-type">{ProductTypes[1]}</h1>
                }
                <h1 className="add-cart-product-name">{product.productName}</h1>
                {isSpinBug &&
                    <h1 className="add-cart-product-name-bottom-type">{ProductTypes[2]}</h1>
                }
                {isDodger &&
                    <h1 className="add-cart-product-name-bottom-type">{ProductTypes[3]}</h1>
                }
                <div className="add-cart-img-main-cont">
                    <img className="add-product-image" src={product.productImage} />
                </div>
                <table className="add-cart-table">
                    <tbody>
                        <tr>
                            <td>
                                <input type="hidden" name="on0" value={product.productName} />
                            </td>
                        </tr>
                        <tr className="add-cart-row-cont">
                            <td>
                                <select className="select-product" name="os0">
                                    {product.options.map((type, index) => (
                                        <option className="product-options" key={index} value={`${type} ${product.price} USD`}>
                                            {`${type} $${product.price} USD`}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="hidden" name="currency_code" value="USD" />
                <div className="add-cart-btn-cont">
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
                </div>
            </form>
        </div>
    );
};

export default AddToCartPanel;