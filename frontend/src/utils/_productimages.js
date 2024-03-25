// Product Images:
    // Each Array holds different attribute pictures
    // Outermost array is for the specific type of product
    // First inner most array is the default picture of the product
    // Second inner most array is the type variant of the product
    // Type variants include:
    //      flo, small dodger, dodger, more, etc.


// list of all the main images of a product
const mainImages = [
    {type: 'image', url: require("./images/blingblingblackrussian.jpg")},   // Bling Bling
    {type: 'image', url: require("./images/pinacoloda.jpg")},               // Cocktails
    {type: 'image', url: require("./images/DSwatermelondodger.jpg")},       // DS Dodgers
    {type: 'image', url: require("./images/firetigeruv.jpg")},              // Firetiger
    {type: 'image', url: require("./images/golddiggerblack.jpg")},          // Gold Diggers
    {type: 'image', url: require("./images/honeydripperpink.jpg")},         // Honey Drippers
    {type: 'image', url: require("./images/hollysrubyslipper.jpg")},        // Lil Comets
    {type: 'image', url: require("./images/watermelon.jpg")},               // Melons
    {type: 'image', url: require("./images/purplenurple.jpg")},             // Plum Crazy
    {type: 'image', url: require("./images/premiumuvpink.jpg")},            // Premium UV
    {type: 'image', url: require("./images/tigerpink.jpg")},                // Tiger
    {type: 'image', url: require("./images/wonderbreadoriginal.jpg")},      // Wonderbread
];

// list of all type variants of a product
const typeImages = [
    {type: 'image', url: require("./images/blingblingcherryfizz.jpg")},         // Bling Bling
    {type: 'image', url: require("./images/pinacolodadodger.jpg")},             // Cocktails
    null,                                                                       // DS Dodgers
    null,                                                                       // Firetiger
    {type: 'image', url: require("./images/flogolddiggerpink.jpg")},            // Gold Diggers
    {type: 'image', url: require("./images/honeydripperdodgerpink.jpg")},       // Honey Drippers
    {type: 'image', url: require("./images/hollysrubyslipperdodger.jpg")},      // Lil Comets
    {type: 'image', url: require("./images/watermelondodger.jpg")},             // Melons
    {type: 'image', url: require("./images/purplenurpledodger.jpg")},           // Plum Crazy
    null,                                                                       // Premium UV
    null,                                                                       // Tiger
    {type: 'image', url: require("./images/wonderbreaddodgeroriginal.jpg")},    // Wonderbread
]

// Initialize ProductsMedia as an empty array
// Exports to grab urls for the browser to recognize
export const ProductsMedia = [];

// Loop through both mainImages and typeImages
for (let i = 0; i < mainImages.length; i++) {
    const mainImage = mainImages[i];
    const typeImage = typeImages[i];

    // Create the structure for this iteration
    const mediaItem = [
        [
            mainImage ? mainImage : { type: 'image', url: null },
        ],
        [
            typeImage ? typeImage : { type: 'image', url: null },
        ]
    ];

    // Push the mediaItem to ProductsMedia
    ProductsMedia.push(mediaItem);
};