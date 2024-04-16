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
        "blingblingblackrussian.jpg",
        "blingblingsangria.jpg",
        "blingblinggreengoblin.jpg",
        "blingblingelectrickamikazi.jpg",
        "blingblingpurplerain.jpg",
        "blingblingwatermelon.jpg",
    ],
    [   // Cocktails
        "cocktailpinacolada.jpg",
        "cocktailcosmo.jpg",
        "cocktailmaitai.jpg",
        "cocktailkaluhancream.jpg",
        "cocktaildaquiri.jpg",
        "cocktailappletini.jpg",
        "cocktailmojito.jpg",
        "cocktailtequilasunrize.jpg",
        "cocktaildeeppurple.jpg",
        "cocktailsingaporesling.jpg",
    ],
    [   // DS Dodgers
        "DSwatermelondodger.jpg",
        "DShoneydontdodger.jpg",
        "DScantaloupedodger.jpg",
    ],
    [   // Firetiger
        "firetigeruv.jpg",
        "firetigerglow.jpg",
        "firetigerbling.jpg",
    ],
    [   // Gold Diggers
        "golddiggerblack.jpg",
        "golddiggerpurple.jpg",
        "golddiggerred.jpg",
        "golddiggergreen.jpg",
        "golddiggerblue.jpg",
    ],
    [   // Honey Drippers
        "honeydripperpink.jpg",
        "honeydrippergreen.jpg",
        "honeydripperorange.jpg",
        "honeydripperchartreuse.jpg",
        "honeydripperpurple.jpg",
    ],
    [   // Lil Comets
        "lilcometshollysrubyslipper.jpg",
        "lilcometsaclockworkorange.jpg",
        "lilcometsthegreenhornet.jpg",
        "lilcometskermit.jpg",
        "lilcometstheflash.jpg",
        "lilcometssourgrapes.jpg",
        "lilcometswatermelonsugar.jpg",
        "lilcometsbluelagoon.jpg",
        "lilcometsthepinkanator.jpg",
    ],
    [   // Melons
        "melonswatermelon.jpg",
        "melonsallglowwatermelon.jpg",
        "blingblingwatermelon.jpg",
        "melonshoneydont.jpg",
        "melonscantaloupe.jpg",
    ],
    [   // Plum Crazy
        "plumcrazypurplenurple.jpg",
        "plumcrazyrazzledazzle.jpg",
        "plumcrazygoldnplum.jpg",
        "plumcrazynuclearplum.jpg",
    ],
    [   // Premium UV
        "premiumuvpink.jpg",
        "premiumuvgreen.jpg",
        "premiumuvorange.jpg",
        "premiumuvchartreuse.jpg",
    ],
    [   // Tiger
        "tigerpink.jpg",
        "tigergreen.jpg",
        "tigerorange.jpg",
        "tigerchartreuse.jpg",
        "tigerblue.jpg",
        "tigerglowpurple.jpg",
        "tigerglow.jpg",
    ],
    [   // Wonderbread
        "wonderbreadoriginal.jpg",
        "wonderbreadbling.jpg",
        "wonderbreadgolden.jpg",
    ]
];

// list of all type variants of a product
const typeImages = [
    [   // Bling Bling
        "blingblingcherryfizz.jpg",
        "blingblingirishmist.jpg",
        "blingblingmimosa.jpg",
        "blingblingshamrock.jpg",
    ],
    [   // Cocktails
        "cocktailpinacoladadodger.jpg",
        "cocktailcosmododger.jpg",
        "cocktailkaluhancreamdodger.jpg",
        "cocktaildaquiridodger.jpg",
        "cocktailappletinidodger.jpg",
        "cocktailmojitododger.jpg",
        "cocktailsingaporeslingdodger.jpg",
    ],
    null,   // DS Dodgers
    null,   // Firetiger
    [   // Gold Diggers
       "flogolddiggerpink.jpg",
       "flogolddiggergreen.jpg",
       "flogolddiggerorange.jpg",
       "flogolddiggerchartreuse.jpg",
    ],
    [   // Honey Drippers
        "honeydripperpinkdodger.jpg",
        "honeydrippergreendodger.jpg",
        "honeydripperorangedodger.jpg",
        "honeydripperchartreusedodger.jpg",
        "honeydripperpurpledodger.jpg",
    ],
    [   // Lil Comets
        "lilcometshollysrubyslipperdodger.jpg",
        "lilcometsaclockworkorangedodger.jpg",
        "lilcometsthegreenhornetdodger.jpg",
        "lilcometskermitdodger.jpg",
        "lilcometstheflashdodger.jpg",
        "lilcometssourgrapesdodger.jpg",
        "lilcometswatermelonsugardodger.jpg",
        "lilcometsbluelagoondodger.jpg",
        "lilcometsthepinkanatordodger.jpg",
    ],
    [   // Melons
        "melonswatermelondodger.jpg",
        "melonshoneydontdodger.jpg",
        "melonscantaloupedodger.jpg",
    ],
    [   // Plum Crazy
        "plumcrazypurplenurpledodger.jpg",
        "plumcrazyrazzledazzledodger.jpg",
        "plumcrazygoldnplumdodger.jpg",
    ],
    null,   // Premium UV
    null,   // Tiger
    [   // Wonderbread
        "wonderbreadoriginaldodger.jpg",
        "wonderbreadblingdodger.jpg",
        "wonderbreadgoldendodger.jpg",
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

    const newMainImageList = [];
    const newTypeImageList = [];

    for (let j = 0; j < mainImageList.length; j++) {
        newMainImageList.push({type: 'image', url: require("./images/" + mainImageList[j])});
    }

    if (typeImageList) {     // checks if the list is null or not
        for (let k = 0; k < typeImageList.length; k++) {
            newTypeImageList.push({type: 'image', url: require("./images/" + typeImageList[k])});
        }        
    }
    else {
        newTypeImageList.push(null);
    }

    // Create the structure for this iteration
    const productImgs = [
        [
            newMainImageList
        ],
        [
            newTypeImageList
        ]
    ];

    // Push the mediaItem to ProductsMedia
    ProductsMedia.push(productImgs);
};