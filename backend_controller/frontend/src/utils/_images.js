// This file is used for webpack to recognize images and 
// make the browser also recognize images in the bundle file.

// Also this file is used for Div Background Images only
const IMAGES = {
    // Menu Icon
    MenuIcon: require("./images/menuicon.png").default,

    // Slide Images
    Slide1: require("./images/Slide1.jpg").default,
    Slide2: require("./images/Slide2.jpg").default,
    Slide3: require("./images/Slide3.jpg").default,
}

export default IMAGES;