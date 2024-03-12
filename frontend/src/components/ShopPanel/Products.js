import { ProductsMedia } from '../../utils/_productimages';
// you can add more images to have them change by putting the urls in an array

// Keep moreLures for now, maybe change it in the future depending on what you need

export const PRODUCTS = [
    {
        id: 1,
        hosted_button_id: "BF75TMRUASCPG",
        shopName: "Cocktails",
        productName: "Cocktails",
        price: 4.49,
        options: ["Pina Colada", "Cosmo", "Mai Tai", "Kaluaha N Cream", "Daquiri", "Appletini", "Mojito", "Tequilla Sunrize", "Deep Purple", "Sinapore Sling"],
        productImage: ProductsMedia[0][0][0].url,
        spinBug: false,
        dodger: {
            hosted_button_id: "89GCLMVHLYRES",
            productName: "Cocktail",
            price: 7.49,
            options: ["Pina Colada", "Cosmo", "Kaluha N Cream", "Daquiri", "Appletini", "Mojito", "Singapore Sling"],
            productImage: ProductsMedia[0][1][0].url,
        },
        florescent: null,
        moreLures: null
    },
    {   // DS Dodgers might need adjustments later for more inclusion of DS variant types
        id: 2,
        hosted_button_id: "JQRQ9EFS4J4W8",
        shopName: "DS Dodgers",
        productName: "DS Dodgers",
        price: 6.99,
        options: ["Watermelon", "Honey Don't", "Cantaloupe"],
        productImage: ProductsMedia[1][0][0].url,
        spinBug: false,
        dodger: null,
        florescent: null,
        moreLures: null
    },
    {
        id: 3,
        hosted_button_id: "B7CSSSV7DCCJL",
        shopName: "Gold Diggers",
        productName: "Gold Diggers",
        price: 4.99,
        options: ["Black", "Purple", "Red", "Green", "Blue", "Orange"],
        productImage: ProductsMedia[2][0][0].url,
        spinBug: false,
        dodger: null,
        florescent: {
            hosted_button_id: "BGUVQTGRH7ANU",
            productName: "Gold Diggers",
            price: 4.99,
            options: ["Flo Pink", "Flo Green", "Flo Orange", "Flo Chartreuse"],
            productImage: ProductsMedia[2][1][0].url,
        },
        moreLures: null
    },
    // Test seemed to have work make sure it actually works overtime
    // comeback to ID 4 if you run into problems processing payments
    {
        id: 4,
        hosted_button_id: "EFWCFJWPU9QYC",
        shopName: "Honey Drippers",
        productName: "Honey Drippers",
        price: 4.49,
        options: ["Pink", "Green", "Orange", "Chartruese", "Purple"],
        productImage: ProductsMedia[3][0][0].url,
        spinBug: false,
        dodger: {
            hosted_button_id: "JSK5UU2SZT63S",
            productName: "Honey Dripper",
            price: 7.49,
            options: ["Pink", "Green", "Orange", "Chartruese", "Purple"],
            productImage: ProductsMedia[3][1][0].url,
        },
        florescent: null,
        moreLures: null
    },
    {
        id: 5,
        hosted_button_id: "8RGUWM4GKD28U",
        shopName: "Lil Comets",
        productName: "Lil Comets",
        price: 4.49,
        options: ["Holly's Ruby Slipper", "A Clockwork Orange", "The Green Hornet", "Kermit", "The Flash", "Sour Grapes", "Watermelon Sugar", "Blue Lagoon", "The Pinkanator"],
        productImage: ProductsMedia[4][0][0].url,
        spinBug: false,
        dodger: {
            hosted_button_id: "LRHUVNNZD9LRN",
            productName: "Lil Comet",
            price: 6.99,
            options: ["Holly's Ruby Slipper", "A Clockwork Orange", "The Green Hornet", "Kermit", "The Flash", "Sour Grapes", "Watermelon Sugar", "Blue Lagoon", "The Pinkanator"],
            productImage: ProductsMedia[4][1][0].url,
        },
        florescent: null,
        moreLures: null
    },
    {
        id: 6,
        hosted_button_id: "V7Q4JB7UW2H26",
        shopName: "Melons",
        productName: "Melons",
        price: 4.49,
        options: ["Watermelon", "All Glow Watermelon", "Bling Melon", "Honey Don't", "Cantaloupe"],
        productImage: ProductsMedia[5][0][0].url,
        spinBug: false,
        dodger: {
            hosted_button_id: "NJXCEJKUBRKH2",
            productName: "Melon",
            price: 6.99,
            options: ["Watermelon", "Honey Don't", "The Green Hornet"],
            productImage: ProductsMedia[5][1][0].url,
        },
        florescent: null,
        moreLures: null
    },
    {
        id: 7,
        hosted_button_id: "6TFUWQMY9GH5Y",
        shopName: "Plum Crazy",
        productName: "Plum Crazy",
        price: 4.49,
        options: ["Purple Nurple", "Razzle Dazzle", "Gold N Plum"],
        productImage: ProductsMedia[6][0][0].url,
        spinBug: false,
        dodger: {
            hosted_button_id: "UU9TH8P32ZESE",
            productName: "Plum Crazy",
            price: 7.49,
            options: ["Purple Nurple", "Razzle Dazzle", "Gold N Plum"],
            productImage: ProductsMedia[6][1][0].url,
        },
        florescent: null,
        moreLures: null,
    },
    {
        id: 8,
        hosted_button_id: "67U6ZUNGHLSZG",
        shopName: "Wonderbread",
        productName: "Wonderbread",
        price: 4.49,
        options: ["Original glow", "Bling", "Golden"],
        productImage: ProductsMedia[7][0][0].url,
        spinBug: true,
        dodger: {
            hosted_button_id: "N9XCEV8R73YZ4",
            productName: "Wonderbread",
            price: 7.49,
            options: ["Original glow", "Bling", "Golden"],
            productImage: ProductsMedia[7][1][0].url,
        },
        florescent: null,
        moreLures: null
    },
]