import React, { useEffect } from 'react';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';
import { GalleryMedia } from '../utils/_gallerymedia';

// component class constructor breaks code when useState from react is
// being used, therfore I used this function method to create
// the page similar to how top navbar was created. Since this
// page doesn't use props, this method is usuable.

const GalleryPage = () => {
    
    // if currentId in localStorage doesn't exist, set the currentId in localStorage
    if (!("currentId" in localStorage)) {
        localStorage.setItem("currentId", -1);
    }

    // every image has an event listener to set the currentId to their index position when created
    const imageEventListener = (index) => {
        useEffect(() => {
            const currentImage = document.getElementById(index);
            currentImage.addEventListener("mousedown", () => {
                localStorage.setItem("currentId", index);
                setTimeout(function(){ location.reload() }, 15);
            })
        })
    }

    // checking for when the currentId exists
    const grabSourceImage = () => {
        if (localStorage.getItem("currentId") == -1) {
            return GalleryMedia[0].url;
        }
        else {
            return GalleryMedia[localStorage.getItem("currentId")].url;
        }
    }

    // when the user presses on the X button it reloads the page to exit the photo
    const xOut= () => {
        localStorage.setItem("currentId", -1);
        setTimeout(function(){ location.reload() }, 35);
    }

    // previous and next image buttons
    const prevImage = () => {
        if (localStorage.getItem("currentId") != 0) {
            localStorage.setItem("currentId", parseInt(localStorage.getItem("currentId")) - 1);
            setTimeout(function(){ location.reload() }, 50);
        }
    }

    const nextImage = () => {
        if (localStorage.getItem("currentId") != 23) {
            localStorage.setItem("currentId", parseInt(localStorage.getItem("currentId")) + 1);
            setTimeout(function(){ location.reload() }, 50);
        }
    }

    return(
        <div>
            <InfoNavPanel />
            <div className="gallery-container">
                <h1>Gallery</h1>
                <div className="media-container">
                    {
                        GalleryMedia.map((image, index) => (
                            <div id={index} className="media">
                                {
                                    <img id={index} src={image.url} alt="" />
                                }
                                {imageEventListener(index)}
                            </div>
                        ))
                    }
                </div>
                
                <div className="popup-media"
                style={{ display: localStorage.getItem("currentId") != -1 ? "block" : "none"}}>
                    <span className="x-out" onClick={() => xOut()}>&times;</span>
                    <span id="previous" className="prev-arrow" onClick={() => prevImage()}>{"<"}</span>
                    <span id="next" className="next-arrow" onClick={() => nextImage()}>{">"}</span>
                    {
                        <img src={grabSourceImage()} />
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GalleryPage;