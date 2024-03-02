import React, { useContext } from 'react';
import ProductContext from '../../context/ProductContext';
import { PRODUCTS } from './Products';

const AddToCartPanel = (props) => {

    // Product Context
    const { currentProduct } = useContext(ProductContext);
    
    return (
        <div>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value={
                    props.isDodger ? PRODUCTS[currentProduct].dodger.hosted_button_id : PRODUCTS[currentProduct].hosted_button_id
                }/>
                <h1 className="add-cart-product-name">{
                    props.isDodger ? PRODUCTS[currentProduct].dodger.productName : PRODUCTS[currentProduct].productName
                }</h1>
                <div className="add-cart-img-cont">
                    <img className="shop-list-product-image" src={
                        props.isDodger ? PRODUCTS[currentProduct].dodger.productImage : PRODUCTS[currentProduct].productImage
                    }/>
                </div>
                <table className="add-cart-table">
                    <tbody>
                        <tr>
                            <td>
                                <input type="hidden" name="on0" value={
                                    props.isDodger ? PRODUCTS[currentProduct].dodger.productName : PRODUCTS[currentProduct].productName
                                }/>
                            </td>
                        </tr>
                        <tr className="add-cart-row-cont">
                            <td>
                                <select className="select-product" name="os0">
                                    {props.isDodger ? PRODUCTS[currentProduct].dodger.options.map((type, index) => (
                                        <option key={index} value={`${type} ${PRODUCTS[currentProduct].dodger.price} USD`}>
                                            {`${type} $${PRODUCTS[currentProduct].dodger.price} USD`}
                                        </option>
                                    ))
                                    : PRODUCTS[currentProduct].options.map((type, index) => (
                                        <option key={index} value={`${type} ${PRODUCTS[currentProduct].price} USD`}>
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