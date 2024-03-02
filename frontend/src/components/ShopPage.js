import React from 'react';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';

const ShopPage = () => {
    
    // NOTE: For now just work with 3 different types of products as a test run to implement the foundations
    // From there once this stage is complete you can add more prodcuts dynamically
    // don't make it too hard on yourself you got this!

    return (
        <div>
            <InfoNavPanel />
            <div className="shop-cont">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="B7CSSSV7DCCJL" />
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="hidden" name="on0" value="GOLD DIGGERS"/>
                                    GOLD DIGGERS
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select name="os0">
                                        <option value="Black $4.49 USD">
                                            Black $4.49 USD
                                        </option>
                                        <option value="Purple $4.49 USD">
                                            Purple $4.49 USD
                                        </option>
                                        <option value="Red $4.49 USD">
                                            Red $4.49 USD
                                        </option>
                                        <option value="Green $4.49 USD">
                                            Green $4.49 USD
                                        </option>
                                        <option value="Blue $4.49 USD">
                                            Blue $4.49 USD
                                        </option>
                                        <option value="Orange $4.49 USD">
                                            Orange $4.49 USD
                                        </option>
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

export default ShopPage;