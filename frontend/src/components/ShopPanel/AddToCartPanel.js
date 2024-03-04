import React from 'react';
import { PRODUCTS } from './Products';

const AddToCartPanel = ({ currentProduct, isDodger }) => {
    
    return (
        <div className="add-cart-product-cont">
            <form className="add-cart-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value={
                    isDodger ? PRODUCTS[currentProduct].dodger.hosted_button_id : PRODUCTS[currentProduct].hosted_button_id
                }/>
                <h1 className="add-cart-product-name">{
                    isDodger ? PRODUCTS[currentProduct].dodger.productName : PRODUCTS[currentProduct].productName
                }</h1>
                <div className="add-cart-img-main-cont">
                    <div className="add-cart-img-backdrop-cont">
                        <img className="shop-list-product-image" src={
                            isDodger ? PRODUCTS[currentProduct].dodger.productImage : PRODUCTS[currentProduct].productImage
                        }/>
                    </div>
                </div>
                <table className="add-cart-table">
                    <tbody>
                        <tr>
                            <td>
                                <input type="hidden" name="on0" value={
                                    isDodger ? PRODUCTS[currentProduct].dodger.productName : PRODUCTS[currentProduct].productName
                                }/>
                            </td>
                        </tr>
                        <tr className="add-cart-row-cont">
                            <td>
                                <select className="select-product" name="os0">
                                    {isDodger ? PRODUCTS[currentProduct].dodger.options.map((type, index) => (
                                        <option className="product-options" key={index} value={`${type} ${PRODUCTS[currentProduct].dodger.price} USD`}>
                                            {`${type} $${PRODUCTS[currentProduct].dodger.price} USD`}
                                        </option>
                                    ))
                                    : PRODUCTS[currentProduct].options.map((type, index) => (
                                        <option className="product-options" key={index} value={`${type} ${PRODUCTS[currentProduct].price} USD`}>
                                            {`${type} $${PRODUCTS[currentProduct].price} USD`}
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