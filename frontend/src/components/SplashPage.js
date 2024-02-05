// Important Imports
import React from 'react';
import { Helmet } from 'react-helmet';
import IMAGES from '../utils/_images';
// NOTE: IMAGES Import is never directly being used, but it is actually being used by webpack to make it readable to the browser

// Components
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';
import ImageSlideshow from './Slideshows/ImageSlideshow';
import { EssentialMedia } from '../utils/_essentialmedia';

const SplashPage = () => {
    // image url list
    const imageUrls = [EssentialMedia[2].url, EssentialMedia[3].url, EssentialMedia[4].url];

    return(
        <div>
            <Helmet>
                <title>GVF Lures</title>
                <meta name="description"
                    content="GVF Lures has a great selection of fishing lures that just catches fish! Welcome to GVF Lures no species is safe."
                />
            </Helmet>
            <InfoNavPanel />
            <div className="splash-container">
                <ImageSlideshow images={imageUrls}/>
            </div>
            <Footer />
        </div>
    );
};

export default SplashPage;