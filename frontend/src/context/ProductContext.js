import React, { createContext, useState } from "react";

const ProductContext = createContext();

export default ProductContext;

export const ProductProvider = ({ children }) => {

    // setting the state in react
    const [currentProduct, setCurrentProduct] = useState(null);
    const [hasDodger, setHasDodger] = useState(false);

    // passing all the functions into the store to return for export
    const ContextData = {
        currentProduct,
        setCurrentProduct,
        hasDodger,
        setHasDodger
    }

    // returning the store
    return (
        <ProductContext.Provider value={ContextData}>
            {children}
        </ProductContext.Provider>
    )
}