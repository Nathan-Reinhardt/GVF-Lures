// This file is used for webpack to recognize images and 
// make the browser also recognize images in the bundle file.

const IMAGES = {

    // Important Images
    GFVLuresLogo: require("./images/GVFLuresLogo.jpg").default,
    GFVLuresLogo2: require("./images/GVFLuresLogo2.jpg").default,
    Ourboat: require("./images/ourboat.jpg").default,
    RichnMe: require("./images/RichnMe.jpg").default,
    TigerLures: require("./images/TigerLures.jpg").default,

    // Lakes on Computer
    Berryessa: require("./images/berryessa.jpg").default,
    Bluemesa: require("./images/bluemesa.jpg").default,
    Flaming: require("./images/flaminggorge.jpg").default,
    Hellhole: require("./images/hellhole.jpg").default,
    Newbullardsbar: require("./images/newbullardsbar.jpg").default,
    Newmelones: require("./images/newmelones.jpg").default,
    Pardee: require("./images/pardee.jpg").default,
    Pyramid: require("./images/pyramid.jpg").default,
    Stampede: require("./images/stampede.jpg").default,
    
    // Lures on Lake Page
    LPLure1: require("./images/LPLure1.jpg").default,
    LPLure2: require("./images/LPLure2.jpg").default,
    LPLure3: require("./images/LPLure3.jpg").default,
    LPLure4: require("./images/LPLure4.jpg").default,
    LPLure5: require("./images/LPLure5.jpg").default,
    LPLure6: require("./images/LPLure6.jpg").default,
    LPLure7: require("./images/LPLure7.jpg").default,
    LPLure8: require("./images/LPLure8.jpg").default,

    // Slide Images
    Slide1: require("./images/Slide1.jpg").default,
    Slide2: require("./images/Slide2.jpg").default,
    Slide3: require("./images/Slide3.jpg").default,

    // Goofy
    GoofyImageOfMe: require("./images/GoofyImageOfMe.jpg").default
}

export default IMAGES;