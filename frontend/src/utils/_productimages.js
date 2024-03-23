// Product Images:
    // Each Array holds different attribute pictures
    // Outermost array is for the specific type of product
    // First inner most array is the default picture of the product
    // Second inner most array is the type variant of the product
    // Type variants include:
    //      flo, small dodger, dodger, more, etc.


// list of all the main images of a product
const mainImages = [
    {type: 'image', url: require("./images/pinacoloda.jpg")},
    {type: 'image', url: require("./images/DSwatermelondodger.jpg")},
    {type: 'image', url: require("./images/golddiggerblack.jpg")},
    {type: 'image', url: require("./images/honeydripperpink.jpg")},
    {type: 'image', url: require("./images/hollysrubyslipper.jpg")},
    {type: 'image', url: require("./images/watermelon.jpg")},
    {type: 'image', url: require("./images/purplenurpledodger.jpg")},
    {type: 'image', url: require("./images/wonderbreadoriginal.jpg")},
];

// list of all type variants of a product
const typeImages = [
    {type: 'image', url: require("./images/pinacolodadodger.jpg")},
    null,
    {type: 'image', url: require("./images/flogolddiggerpink.jpg")},
    {type: 'image', url: require("./images/honeydripperdodgerpink.jpg")},
    {type: 'image', url: require("./images/hollysrubyslipperdodger.jpg")},
    {type: 'image', url: require("./images/watermelondodger.jpg")},
    {type: 'image', url: require("./images/purplenurpledodger.jpg")},
    {type: 'image', url: require("./images/wonderbreaddodgeroriginal.jpg")},
]

// Initialize ProductsMedia as an empty array
// Exports to grab urls for the browser to recognize
export const ProductsMedia = [];

// Loop through both mainImages and typeImages
for (let i = 0; i < mainImages.length || i < typeImages.length; i++) {
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