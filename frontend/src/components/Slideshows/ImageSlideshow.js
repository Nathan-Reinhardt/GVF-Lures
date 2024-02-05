import React, { useState, useEffect } from 'react';
import TextSlideshowOverlays from './TextSlideshowOverlays';

const ImageSlideshow = ({ images }) => {
    // to keep track of current index
    const [currentIndex, setCurrentIndex] = useState(0);

    // list of strings to use in the text overlays for each slide
    const textOverlays = ["Welcome to GVF Lures!", "No Species Is Safe"];

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