import React, { useContext } from 'react';
import InfoNavPanel from '../InfoNavPanel/InfoNavPanel';
import Footer from '../InfoNavPanel/Footer';
import ProductContext from '../../context/ProductContext';
import { PRODUCTS } from './Products';

const AddToCartPage = () => {

    // Product Context
    const {currentProduct} = useContext(ProductContext);
    
    return (
        <div>
            <InfoNavPanel />
            <div className="add-cart-cont">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value={PRODUCTS[currentProduct].hosted_button_id} />
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="hidden" name="on0" value={PRODUCTS[currentProduct].productName}/>
                                    {PRODUCTS[currentProduct].productName}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select name="os0">
                                        {PRODUCTS[currentProduct].options.map((type, index) => (
                                            <option key={index} value={`${type} $4.49 USD`}>
                                                {`${type} $4.49 USD`}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddToCartPage;