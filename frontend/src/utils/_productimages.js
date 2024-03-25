// Product Images:
    // Each Array holds different attribute pictures
    // Outermost array is for the specific type of product
    // First inner most array is the default picture of the product
    // Second inner most array is the type variant of the product
    // Type variants include:
    //      flo, small dodger, dodger, more, etc.


// list of all the main images of a product
const mainImages = [
    [   // Bling Bling
        {type: 'image', url: require("./images/blingblingblackrussian.jpg")},   // when you come back, make sure to add all photos needed and run tests
        {type: 'image', url: require("./images/pinacoloda.jpg")},
    ],
    [   // Cocktails
        {type: 'image', url: require("./images/pinacoloda.jpg")},
    ],
    [   // DS Dodgers
        {type: 'image', url: require("./images/DSwatermelondodger.jpg")},
    ],
    [   // Firetiger
        {type: 'image', url: require("./images/firetigeruv.jpg")},
    ],
    [   // Gold Diggers
        {type: 'image', url: require("./images/golddiggerblack.jpg")}, 
    ],
    [   // Honey Drippers
        {type: 'image', url: require("./images/honeydripperpink.jpg")},
    ],
    [   // Lil Comets
        {type: 'image', url: require("./images/hollysrubyslipper.jpg")},
    ],
    [   // Melons
        {type: 'image', url: require("./images/watermelon.jpg")},
    ],
    [   // Plum Crazy
        {type: 'image', url: require("./images/purplenurple.jpg")},
    ],
    [   // Premium UV
        {type: 'image', url: require("./images/premiumuvpink.jpg")},
    ],
    [   // Tiger
        {type: 'image', url: require("./images/tigerpink.jpg")},
    ],
    [   // Wonderbread
        {type: 'image', url: require("./images/wonderbreadoriginal.jpg")},
    ]
];

// list of all type variants of a product
const typeImages = [
    [   // Bling Bling
        {type: 'image', url: require("./images/blingblingcherryfizz.jpg")},     // only test bling bling for image switching
        {type: 'image', url: require("./images/blingblingcherryfizz.jpg")},
    ],
    [   // Cocktails
        {type: 'image', url: require("./images/pinacolodadodger.jpg")},
    ],
    null,   // DS Dodgers
    null,   // Firetiger
    [   // Gold Diggers
       {type: 'image', url: require("./images/flogolddiggerpink.jpg")}, 
    ],
    [   // Honey Drippers
        {type: 'image', url: require("./images/honeydripperdodgerpink.jpg")},
    ],
    [   // Lil Comets
        {type: 'image', url: require("./images/hollysrubyslipperdodger.jpg")},
    ],
    [   // Melons
        {type: 'image', url: require("./images/watermelondodger.jpg")},
    ],
    [   // Plum Crazy
        {type: 'image', url: require("./images/purplenurpledodger.jpg")},
    ],
    null,   // Premium UV
    null,   // Tiger
    [   // Wonderbread
        {type: 'image', url: require("./images/wonderbreaddodgeroriginal.jpg")},
    ]
];

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// Code Below is used to dynamically create the ProductsMedia list,
// do not change unless you want to modify the logic
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// Saftey check for debugging purposes to double check that every list above is the same length for data consistency
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
if (mainImages.length !== typeImages.length) {
    throw new Error("Image Arrays have different lengths. Check data consistency.");
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// Initialize ProductsMedia as an empty array
// Exports to grab urls for the browser to recognize
export const ProductsMedia = [];

// Loop through both mainImages and typeImages
for (let i = 0; i < mainImages.length; i++) {
    const mainImageList = mainImages[i];
    const typeImageList = typeImages[i];

    // Create the structure for this iteration
    const mediaItem = [
        [
            mainImageList
        ],
        [
            typeImageList   // if null it will put null inside this list
        ]
    ];

    // Push the mediaItem to ProductsMedia
    ProductsMedia.push(mediaItem);
};