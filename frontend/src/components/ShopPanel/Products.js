import { ProductsMedia } from '../../utils/_productimages';
// you can add more images to have them change by putting the urls in an array

export const PRODUCTS = [
    {
        id: 1,
        hosted_button_id: "B7CSSSV7DCCJL",
        shopName: "Gold Diggers",
        productName: "Gold Diggers",
        price: 4.99,
        options: ["Black", "Purple", "Red", "Green", "Blue", "Orange"],
        productImage: ProductsMedia[0][0][0].url,
        spinBug: false,
        dodger: null,
        florescent: {
            hosted_button_id: "BGUVQTGRH7ANU",
            productName: "Gold Diggers",
            price: 4.99,
            options: ["Flo Pink", "Flo Green", "Flo Orange", "Flo Chartreuse"],
            productImage: ProductsMedia[0][1][0].url,
        },
        moreLures: null
    },
    {
        id: 2,
        hosted_button_id: "67U6ZUNGHLSZG",
        shopName: "Wonderbread",
        productName: "Wonderbread",
        price: 4.49,
        options: ["Original glow", "Bling", "Golden"],
        productImage: ProductsMedia[1][0][0].url,
        spinBug: true,
        dodger: {
            hosted_button_id: "N9XCEV8R73YZ4",
            productName: "Wonderbread",
            price: 7.49,
            options: ["Original glow", "Bling", "Golden"],
            productImage: ProductsMedia[1][1][0].url,
        },
        florescent: null,
        moreLures: null
    },
    // Test seemed to have work make sure it actually works overtime
    // comeback to ID 3 if you run into problems processing payments
    {
        id: 3,
        hosted_button_id: "EFWCFJWPU9QYC",
        shopName: "Honey Drippers",
        productName: "Honey Drippers",
        price: 4.49,
        options: ["Pink", "Green", "Orange", "Chartruese", "Purple"],
        productImage: ProductsMedia[2][0][0].url,
        spinBug: false,
        dodger: {
            hosted_button_id: "JSK5UU2SZT63S",
            productName: "Honey Dripper",
            price: 7.49,
            options: ["Pink", "Green", "Orange", "Chartruese", "Purple"],
            productImage: ProductsMedia[2][1][0].url,
        },
        florescent: null,
        moreLures: null
    },
    {
        id: 4,
        hosted_button_id: "WCR5225LD92SG",
        shopName: "Cocktails",
        productName: "Cocktails",
        price: 4.49,
        options: ["Tequillia sunrize", "Mojito", "Singapore Sling", "Kaluaha N Cream", "Deep Purple"],
        productImage: ProductsMedia[3][0][0].url,
        spinBug: false,
        dodger: null,
        florescent: null,
        moreLures: {
            hosted_button_id: "BF75TMRUASCPG",
            productName: "Cocktails",
            price: 4.49,
            options: ["Pina Colada", "Cosmo", "Mai Tai", "Bloody Mary", "Daquiri"],
            productImage: ProductsMedia[3][1][0].url,
        }
    },
    {
        id: 5,
        hosted_button_id: "6TFUWQMY9GH5Y",
        shopName: "Plum Crazy",
        productName: "Plum Crazy",
        price: 4.49,
        options: ["Purple Nurple", "Razzle Dazzle", "Gold N Plum"],
        productImage: ProductsMedia[4][0][0].url,
        spinBug: false,
        dodger: {
            hosted_button_id: "UU9TH8P32ZESE",
            productName: "Plum Crazy",
            price: 7.49,
            options: ["Purple Nurple", "Razzle Dazzle", "Gold N Plum"],
            productImage: ProductsMedia[4][1][0].url,
        },
        florescent: null,
        moreLures: null,
    },
]