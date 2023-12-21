import React, { useState, useEffect } from 'react';

const ImageSlideshow = ({ images }) => {

    // to keep track of current index
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const nextImage = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        console.log(currentIndex);
        const intervalId = setInterval(nextImage, 15000);

        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <div className="slideshow-container">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Slide ${index + 1}`}
                    className={`slide ${index === currentIndex ? 'active' : ''}`}
                />
            ))}
        </div>
    );
};

export default ImageSlideshow;