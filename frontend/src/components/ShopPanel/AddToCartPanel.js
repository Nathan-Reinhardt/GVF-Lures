import React, { useState, useEffect } from 'react';
import PRODUCTS from './Products';

const AddToCartPanel = ({ currentProduct, isSpinBug, isDodger, isFlourescent }) => {
    // The idea of having multiple different useStates is to make sure each panel has control over its own state.
    // There is a possiblity where two of these panels can be on the same page at the same time.
    // Having the same state usage for both panels will cause major bugs of state management.

    // Initilize State for Panels
    const [currentDodgerProductImg, setCurrentDodgerProductImg] = useState('');
    const [currentFlourescentProductImg, setCurrentFlourescentProductImg] = useState('');
    const [currentProductImg, setCurrentProductImg] = useState('');

    // which type of product to create panel for
    useEffect(() => {
        if (isDodger) {
            setCurrentDodgerProductImg(product.productImageList[0].url);
        }
        else if (isFlourescent) {
            setCurrentFlourescentProductImg(product.productImageList[0].url);
        }
        else {
            setCurrentProductImg(product.productImageList[0].url);
        }
    }, [setCurrentDodgerProductImg, setCurrentFlourescentProductImg, setCurrentProductImg, currentProduct]);

    // Handler for changing the image when selecting a different option
    const handleOptionChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        if (isDodger) {
            setCurrentDodgerProductImg(product.productImageList[selectedIndex].url)
        }
        else if (isFlourescent) {
            setCurrentFlourescentProductImg(product.productImageList[selectedIndex].url);
        }
        else {
            setCurrentProductImg(product.productImageList[selectedIndex].url);
        }
    };

    let product;
    if (isDodger) {
        product = PRODUCTS[currentProduct].dodger;
    } 
    else if (isFlourescent) {
        product = PRODUCTS[currentProduct].flourescent;
    }
    else {
        product = PRODUCTS[currentProduct];
    }

    // used to help keep the UI clean for text wrapping
    const ProductTypes = ["Flourescent", "Spinbugs", "Dodgers"];
    
    return (
        <div className="add-cart-product-cont">
            <form className="add-cart-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value={product.hosted_button_id} />
                {isFlourescent &&
                    <h1 className="add-cart-product-name-top-type">{ProductTypes[0]}</h1>
                }
                <h1 className="add-cart-product-name">{product.productName}</h1>
                {isSpinBug &&
                    <h1 className="add-cart-product-name-bottom-type">{ProductTypes[1]}</h1>
                }
                {isDodger &&
                    <h1 className="add-cart-product-name-bottom-type">{ProductTypes[2]}</h1>
                }
                <div className="add-cart-img-main-cont">
                    {isFlourescent &&
                        <img className="add-product-image" src={currentFlourescentProductImg} />
                    }
                    {isDodger &&
                        <img className="add-product-image" src={currentDodgerProductImg} />
                    }
                    {!isFlourescent && !isDodger &&
                        <img className="add-product-image" src={currentProductImg} />
                    }
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
                                <select className="select-product" name="os0" onChange={handleOptionChange}>
                                    {product.options.map((type, index) => (
                                        <option className="product-options" key={index} value={type}>
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