import React, { useState } from 'react';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';
import { GalleryMedia } from '../utils/_gallerymedia';

// component class constructor breaks code when useState from react is
// being used, therfore I used this function method to create
// the page similar to how top navbar was created. Since this
// page doesn't use props, this method is usuable.

const GalleryPage = () => {

    // constant variables to secure values used for functions
    const firstPosition = 0;
    const lastPosition = 23;
    
    // useState to keep track of current picture
    const [pictureIndex, setPictureIndex] = useState(-1);

    // every image has an event listener to set the currentId to their index position when created
    const imageEventListener = (index) => {
        setPictureIndex(index);
    }

    // checking for when the current Picture exists
    const grabSourceImage = () => {
        if (pictureIndex == -1) {
            // return a picture by default to prevent crashes
            return GalleryMedia[0].url;
        }
        else {
            // Hide scrollbar
            document.body.style.overflow = 'hidden';
            // Prevent scrolling
            document.body.classList.add('no-scroll');
            // return the current picture to be blown up
            return GalleryMedia[pictureIndex].url;
        }
    }

    // when the user presses on the X button it sets the pictureIndex to -1
    const xOut= () => {
        setPictureIndex(-1);
        // Make the scroll bar appear
        document.body.style.overflow = 'auto';
        // Re enable scrolling
        document.body.classList.remove('no-scroll');
    }

    // previous button
    const prevImage = () => {
        if (pictureIndex != firstPosition) {
            setPictureIndex(pictureIndex - 1);
        }
    }

    // next button
    const nextImage = () => {
        if (pictureIndex != lastPosition) {
            setPictureIndex(pictureIndex + 1);
        }
    }

    return(
        <div>
            <InfoNavPanel />
            <div className="media-wrapper">
                <div className="gallery-container">
                    <h1 className="gallery-title">Gallery</h1>
                    <div className="media-container">
                        {
                            GalleryMedia.map((image, index) => (
                                <div key={index} id={index} className="media" onClick={() => imageEventListener(index)}>
                                    {
                                        <img id={index} src={image.url} alt="" />
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div className="popup-media"
                    style={{ display: pictureIndex != -1 ? "block" : "none"}}>
                        <span className="x-out" onClick={() => xOut()}>&times;</span>
                        <span id="previous" className="prev-arrow" onClick={() => prevImage()}>{"<"}</span>
                        <span id="next" className="next-arrow" onClick={() => nextImage()}>{">"}</span>
                        {
                            <img src={grabSourceImage()} />
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GalleryPage;