import React from 'react';
import { PRODUCTS } from './Products';

const AddToCartPanel = ({ currentProduct, isDodger }) => {

    const product = isDodger ? PRODUCTS[currentProduct].dodger : PRODUCTS[currentProduct];
    
    return (
        <div className="add-cart-product-cont">
            <form className="add-cart-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_xclick" />
                <input type="hidden" name="hosted_button_id" value={product.hosted_button_id} />
                <h1 className="add-cart-product-name">{product.productName}</h1>
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