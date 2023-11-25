// This file is used for webpack to recognize images and 
// make the browser also recognize images in the bundle file.

const IMAGES = {

    // Important Images
    GFVLuresLogo: require("./images/GVFLuresLogo.jpg").default,
    Ourboat: require("./images/ourboat.jpg").default,
    RichnMe: require("./images/RichnMe.jpg").default,
    TigerLures: require("./images/TigerLures.jpg").default,

    // Slide Images
    Slide1: require("./images/Slide1.jpg").default,
    Slide2: require("./images/Slide2.jpg").default,
    Slide3: require("./images/Slide3.jpg").default,

    // Goofy
    GoofyImageOfMe: require("./images/GoofyImageOfMe.jpg").default
}

export default IMAGES;