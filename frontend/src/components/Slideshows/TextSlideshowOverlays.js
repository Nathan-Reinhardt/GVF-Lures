import React, { useState, useEffect } from 'react';

const TextSlideshowOverlays = ({ textOverlays, intervalNum }) => {
    // to keep track of current index
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // to switch to the next image
        const nextText = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textOverlays.length);
        };

        // change the number for how many miliseconds between images
        const intervalId = setInterval(nextText, intervalNum);

        return () => clearInterval(intervalId);
    }, [textOverlays, intervalNum]);

    // when you continue make sure to maybe pass props into this component for a text list
    // also props being sent into the component might not be the best solution so keep testing

    return (
        <div>
            {textOverlays.map((text, index) => (
                <div key={index} className={`overlay-text ${index === currentIndex ? 'active' : ''}`}>
                    {text}
                </div>
            ))}
        </div>
    );
};

export default TextSlideshowOverlays;