import React, { createContext, useState } from "react";

const ProductContext = createContext();

export default ProductContext;

export const ProductProvider = ({ children }) => {

    // setting the state in react
    const [currentProduct, setCurrentProduct] = useState(null);
    const [hasSpinBug, setHasSpinBug] = useState(false);
    const [hasDodger, setHasDodger] = useState(false);
    const [hasFlourescent, setHasFlourescent] = useState(false);

    // passing all the functions into the store to return for export
    const ContextData = {
        currentProduct,
        setCurrentProduct,
        hasSpinBug,
        setHasSpinBug,
        hasDodger,
        setHasDodger,
        hasFlourescent,
        setHasFlourescent
    }

    // returning the store
    return (
        <ProductContext.Provider value={ContextData}>
            {children}
        </ProductContext.Provider>
    )
}