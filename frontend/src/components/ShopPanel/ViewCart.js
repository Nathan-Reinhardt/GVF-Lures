import React from 'react';

const ViewCart = () => {

    return (
        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
            <input type="hidden" name="cmd" value="_cart"/>
            <input type="hidden" name="business" value="NZ8B6HTGHQ796"/>
            <input type="hidden" name="display" value="1"/>
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
        </form>
    );
};

export default ViewCart;