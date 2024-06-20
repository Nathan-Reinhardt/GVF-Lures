// This file is the Products Library of GVF Lures

// Product Images
import { ProductsMedia } from '../../utils/_productimages';

// DS Dodgers might need adjustments later for more inclusion of DS variant types

// all product hosted button ids
const product_hosted_button_ids = [
    "U3455QAUWTPLN",    // Bling Bling
    "BF75TMRUASCPG",    // Cocktails
    "JQRQ9EFS4J4W8",    // DS Dodgers
    "9RCHTF43RC6GJ",    // Firetiger
    "B7CSSSV7DCCJL",    // Gold Diggers
    "EFWCFJWPU9QYC",    // Honey Drippers
    "8RGUWM4GKD28U",    // Lil Comets
    "V7Q4JB7UW2H26",    // Melons
    "6TFUWQMY9GH5Y",    // Plum Crazy
    "YWFR4KWRCG3KC",    // Premium UV
    "E5JUVJ3ZN5LDJ",    // Tiger
    "67U6ZUNGHLSZG",    // Wonderbread
];

// all product names
const product_names = [
    "Bling Bling",
    "Cocktails",
    "DS Dodgers",
    "Firetiger",
    "Gold Diggers",
    "Honey Drippers",
    "Lil Comets",
    "Melons",
    "Plum Crazy",
    "Premium UV",
    "Tiger",
    "Wonderbread",
];

// all product prices
const product_prices = [
    4.49,   // Bling Bling
    4.49,   // Cocktails
    6.99,   // DS Dodgers
    4.49,   // Firetiger
    4.99,   // Gold Diggers
    4.49,   // Honey Drippers
    4.49,   // Lil Comets
    4.49,   // Melons
    4.49,   // Plum Crazy
    4.49,   // Premium UV
    4.49,   // Tiger
    4.49,   // Wonderbread
];

// all product options
const product_options = [
    ["Black Russian", "Sangria", "Green Goblin", "Electric Kamikazi", "Purple Rain", "Watermelon"], // Bling Bling
    ["Pina Colada", "Cosmo", "Mai Tai", "Kaluha N Cream", "Daquiri", "Appletini", "Mojito", "Tequilla Sunrize", "Deep Purple", "Sinapore Sling"],  // Cocktails
    ["Watermelon", "Honey Don't", "Cantaloupe"],    // DS Dodgers
    ["UV Firetiger", "Glowing Firetiger", "Bling Firetiger"],   // Firetiger
    ["Black", "Purple", "Red", "Green", "Blue"],   // Gold Diggers
    ["Pink", "Green", "Orange", "Chartreuse", "Purple"],    // Honey Drippers
    ["Holly's Ruby Slipper", "A Clockwork Orange", "The Green Hornet", "Kermit", "The Flash", "Sour Grapes", "Watermelon Sugar", "Blue Lagoon", "The Pinkanator"],  // Lil Comets
    ["Watermelon", "All Glow Watermelon", "Bling Melon", "Honey Don't", "Cantaloupe"],   // Melons
    ["Purple Nurple", "Razzle Dazzle", "Gold N Plum", "Nuclear Plum"],   // Plum Crazy
    ["Pink", "Green", "Orange", "Chartreuse"],  // Premium UV
    ["Pink", "Green", "Orange", "Chartreuse", "Blue", "Glow Purple", "Glow"],   // Tiger
    ["Original glow", "Bling", "Golden"],   // Wonderbread
];

// all spinbug attributes for products
const product_sping_bug_attributes = [
    false,  // Bling Bling
    false,  // Cocktails
    false,  // DS Dodgers
    true,   // Firetiger
    false,  // Gold Diggers
    false,  // Honey Drippers
    false,  // Lil Comets
    false,  // Melons
    false,  // Plum Crazy
    false,  // Premium UV
    true,  // Tiger
    true,   // Wonderbread
];

const product_dodgers = [
    null,   // Bling Bling
    {
        hosted_button_id: "89GCLMVHLYRES",
        productName: "Cocktail",
        price: 7.49,
        options: ["Pina Colada", "Cosmo", "Kaluha N Cream", "Daquiri", "Appletini", "Mojito", "Singapore Sling"],
    },  // Cocktails
    null,   // DS Dodgers
    null,   // Firetiger
    null,   // Gold Diggers
    {
        hosted_button_id: "JSK5UU2SZT63S",
        productName: "Honey Dripper",
        price: 7.49,
        options: ["Pink", "Green", "Orange", "Chartreuse", "Purple"],
    },  // Honey Drippers
    {
        hosted_button_id: "LRHUVNNZD9LRN",
        productName: "Lil Comet",
        price: 6.99,
        options: ["Holly's Ruby Slipper", "A Clockwork Orange", "The Green Hornet", "Kermit", "The Flash", "Sour Grapes", "Watermelon Sugar", "Blue Lagoon", "The Pinkanator"],
    },  // Lil Comets
    {
        hosted_button_id: "NJXCEJKUBRKH2",
        productName: "Melon",
        price: 7.49,
        options: ["Watermelon", "Honey Don't", "Cantaloupe"],
    },  // Melons
    {
        hosted_button_id: "UU9TH8P32ZESE",
        productName: "Plum Crazy",
        price: 7.49,
        options: ["Purple Nurple", "Razzle Dazzle", "Gold N Plum"],
    },  // Plum Crazy
    null,   // Premium UV
    null,   // Tiger
    {
        hosted_button_id: "N9XCEV8R73YZ4",
        productName: "Wonderbread",
        price: 7.49,
        options: ["Original glow", "Bling", "Golden"],
    },  // Wonderbread
];

const product_flourescents = [
    {
        hosted_button_id: "YKLSXGBVH3W72",
        productName: "Bling Bling",
        price: 4.49,
        options: ["Cherry Fizz", "Irish Mist", "Mimosa", "Shamrock"],
    },  // Bling Bling
    null,   // Cocktails
    null,   // DS Dodgers
    null,   // Firetiger
    {
        hosted_button_id: "BGUVQTGRH7ANU",
        productName: "Gold Diggers",
        price: 4.99,
        options: ["Flo Pink", "Flo Green", "Flo Orange", "Flo Chartreuse"],
    },  // Gold Diggers
    null,   // Honey Drippers
    null,   // Lil Comets
    null,   // Melons
    null,   // Plum Crazy
    null,   // Premium UV
    null,   // Tiger
    null,   // Wonderbread
];

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// Code Below is used to dynamically create the PRODUCTS list,
// do not change unless you want to modify the logic
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// Saftey check for debugging purposes to double check that every list above is the same length for data consistency
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
if (
    product_hosted_button_ids.length !== product_names.length ||
    product_names.length !== product_prices.length ||
    product_prices.length !== product_options.length ||
    product_options.length !== product_sping_bug_attributes.length ||
    product_sping_bug_attributes.length !== product_dodgers.length ||
    product_dodgers.length !== product_flourescents.length ||
    product_flourescents.length !== product_hosted_button_ids.length
) {
    throw new Error("One of the Product Arrays have different lengths. Check data consistency.");
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// Initialize PRODCUTS as an empty array
const PRODUCTS = [];

// Set the length for how many times will be iterated
const masterLength = product_hosted_button_ids.length;

// Loop through all the products
for (let i = 0; i < masterLength; i++) {
    // Create the product's base object structure for this iteration
    const productItem = {};
    // Give the product an id
    productItem.id = i + 1;
    // Grab the product's button id
    productItem.hosted_button_id = product_hosted_button_ids[i];
    // Grab the product's name
    productItem.productName = product_names[i];
    // Grab the product's price
    productItem.price = product_prices[i];
    // Grab the product's options
    productItem.options = product_options[i];
    // Set the default product image --- this is subject to change when implementing all photos for the product options
    productItem.productImageList = ProductsMedia[i][0][0];
    // Grab the product's spin bug attr
    productItem.spinBug = product_sping_bug_attributes[i];
    // Grab the product's dodger info
    productItem.dodger = product_dodgers[i];
    // if a product has a dodger then add a default image for the dodger --- also subject to change when adding more options
    if (productItem.dodger) {
        productItem.dodger.productImageList = ProductsMedia[i][1][0];
    }
    // Grab the product's flourescent type info
    productItem.flourescent = product_flourescents[i];
    // if a product has a flourescent type then add a default image for the flourescent --- also subject to change when adding more options
    if (productItem.flourescent) {
        productItem.flourescent.productImageList = ProductsMedia[i][1][0];
    }
    // Push the productItem to PRODUCTS
    PRODUCTS.push(productItem);
};

// Exports to use the PRODUCTS list anywhere in the website
export default PRODUCTS;