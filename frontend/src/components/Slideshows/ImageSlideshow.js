import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';
import TextSlideshowOverlays from './TextSlideshowOverlays';

const ImageSlideshow = ({ images }) => {
    const {user} = useContext(AuthContext);     // grab the user and token

    // to keep track of current index
    const [currentIndex, setCurrentIndex] = useState(0);

    // props to send into TextSlideshowOverlays
    // used to make sure React doesn't break when user doesn't exist
    const username = user ? user.username : "none";

    // list of strings to use in the text overlays for each slide
    const textOverlays = user ? ["Welcome " + username + " to GVF LURES!", "No Species Is Safe"] : ["Welcome to GVF LURES!", "No Species Is Safe"];

    // change the number for how many miliseconds between images
    const intervalNum = 15000;

    useEffect(() => {
        // to switch to the next image
        const nextImage = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        const intervalId = setInterval(nextImage, intervalNum);

        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <div className="slideshow-container">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Slide ${index + 1}`}
                    className={`slide ${index === currentIndex ? 'active' : ''}`}
                />
            ))}
            <TextSlideshowOverlays textOverlays={textOverlays} intervalNum={intervalNum} />
        </div>
    );
};

export default ImageSlideshow;