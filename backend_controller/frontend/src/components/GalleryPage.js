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

    return(
        <div>
            <InfoNavPanel />
            <div className="gallery-container">
                <h1>Gallery</h1>
                <div className="media-container">
                    {
                        Media.map((file, index) => (
                            <div className="media" key={index} onClick={() => setFile(file)}>
                                {
                                    <img src={file.url} alt="" />
                                }
                            </div>
                        ))
                    }
                </div>
                
                <div className="popup-media" style={{ display: file ? 'block' : 'none'}}>
                    <span onClick={() => setFile(null)}>&times;</span>
                    {
                        <img src={file?.url} />
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GalleryPage;