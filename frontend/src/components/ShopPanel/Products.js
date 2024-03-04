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
    },
    // Do a test later to see what happens when the order of the options is changed from the ones
    // defined within the paypal interface to check if the correct honey dripper is actually bought
    {
        id: 3,
        hosted_button_id: "EFWCFJWPU9QYC",
        productName: "Honey Drippers",
        price: 4.49,
        options: ["Pink", "Orange", "Green", "Purple", "Chartruese"],
        productImage: ProductsMedia[2][0][0].url,
        dodger: {
            hosted_button_id: "JSK5UU2SZT63S",
            productName: "Honey Dripper Dodgers",
            price: 7.49,
            options: ["Pink", "Orange", "Green", "Purple", "Chartruese"],
            productImage: ProductsMedia[2][1][0].url,
        }
    }
]