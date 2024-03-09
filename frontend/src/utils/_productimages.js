// Product Images:
    // Each Array holds different attribute pictures
    // Outermost array is for the specific type of product
    // First inner most array is the default picture of the product
    // Second inner most array is the type variant of the product
    // Type variants include:
    //      flo, small dodger, dodger, more, etc.

// used to grab urls for the browser to recognize
export const ProductsMedia = [
    [
        [
            {type: 'image', url: require("./images/golddiggerblack.jpg")},
        ],
        [
            {type: 'image', url: require("./images/flogolddiggerpink.jpg")},
        ]
    ],
    [
        [
            {type: 'image', url: require("./images/wonderbreadoriginal.jpg")},
        ],
        [
            {type: 'image', url: require("./images/wonderbreaddodgeroriginal.jpg")},
        ]
    ],
    [
        [
            {type: 'image', url: require("./images/honeydripperpink.jpg")},
        ],
        [
            {type: 'image', url: require("./images/honeydripperdodgerpink.jpg")},
        ]
    ]
]