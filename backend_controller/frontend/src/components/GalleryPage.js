import React, { useState } from 'react';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';
import { Media } from './_media';

// component class constructor breaks code when useState from react is
// being used, therfore I used this function method to create
// the page similar to how top navbar was created. Since this
// page doesn't use props, this method is usuable.

const GalleryPage = () => {
    const [file, setFile] = useState(null);

    // variables used to help set the blow up image while knowing
    // what the current ID is of the element clicked
    var fileList = [];
    var currentId = null;

    // grabbing current id and then setting the source of the div element
    const grabId = () => {
        currentId = event.target.id;
        setFile(fileList[currentId]);
    }

    // previous and next state on click handlers

    // WORK ON THIS WHEN YOU GET BACK
    // const prevImage = () => {
        // NEED TO FIGURE OUT A WAY HOW TO SAVE THE STATE OF THE CURRENT ID
        // MAYBE TRY TO TURN THE SPAN TAGS INTO BUTTON TAGS TO ADD EVENT LISTENERS EASIER
    // }

    // const nextImage = () => {
        
    // }

    return(
        <div>
            <InfoNavPanel />
            <div className="gallery-container">
                <h1>Gallery</h1>
                <div className="media-container">
                    {
                        Media.map((file, index) => (
                            <div id={index} className="media" key={index} onClick={() => grabId()}>
                                {
                                    <img id={index} src={file.url} alt="" />
                                }
                                {fileList.push(file)}
                            </div>
                        ))
                    }
                </div>
                
                <div className="popup-media" style={{ display: file ? 'block' : 'none'}}>
                    <span className="x-out" onClick={() => setFile(null)}>&times;</span>
                    <span className="prev-arrow" onClick={() => prevImage()}>{"<"}</span>
                    <span className="next-arrow" onClick={() => nextImage()}>{">"}</span>
                    {
                        <img id={currentId} src={file?.url} />
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GalleryPage;