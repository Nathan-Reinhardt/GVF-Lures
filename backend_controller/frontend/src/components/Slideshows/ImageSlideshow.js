import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';
import TextSlideshowOverlays from './TextSlideshowOverlays';

const ImageSlideshow = ({ images }) => {
    const {user} = useContext(AuthContext);     // grab the user and token
    const token = localStorage.getItem("authTokens");   // if token is null don't add an element

    // to keep track of current index
    const [currentIndex, setCurrentIndex] = useState(0);

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
            {token === null ? (
                <TextSlideshowOverlays username={user.username} />
            ) : (
                <TextSlideshowOverlays username="none" />
            )}
        </div>
    );
};

export default ImageSlideshow;