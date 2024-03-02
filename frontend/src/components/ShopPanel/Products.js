import { ProductsMedia } from '../../utils/_productimages';
// you can add more images to have them change by putting the urls in an array

export const PRODUCTS = [
    {
        id: 1,
        hosted_button_id: "B7CSSSV7DCCJL",
        productName: "Gold Diggers",
        price: 4.49,
        options: ["Black", "Purple", "Red", "Green", "Blue", "Orange"],
        productImage: ProductsMedia[0][0][0].url,
        dodger: null
    },
    {
        id: 2,
        hosted_button_id: "67U6ZUNGHLSZG",
        productName: "Wonderbread Spingbugs",
        price: 4.49,
        options: ["Original glow", "Bling", "Golden"],
        productImage: ProductsMedia[1][0][0].url,
        dodger: {
            hosted_button_id: "N9XCEV8R73YZ4",
            productName: "Wonderbread Dodgers",
            price: 7.49,
            options: ["Original glow", "Bling", "Golden"],
            productImage: ProductsMedia[1][1][0].url,
        }
    }
]