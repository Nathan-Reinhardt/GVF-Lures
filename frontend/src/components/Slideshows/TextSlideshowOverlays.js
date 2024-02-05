import React, { useState, useEffect } from 'react';

const TextSlideshowOverlays = ({ textOverlays, intervalNum }) => {
    // to keep track of current index
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        // to switch to the next image
        const nextText = () => {
            if (currentTextIndex == 0) {
                setCurrentTextIndex(1);
            }
            else {
                setCurrentTextIndex(0);
            }
        };

        // change the number for how many miliseconds between images
        const intervalId = setInterval(nextText, intervalNum);

        return () => clearInterval(intervalId);
    }, [currentTextIndex]); // run useEffect whenever the index changes

    return (
        <div>
            {textOverlays.map((text, index) => (
                <div key={index} className={`overlay-text ${index === currentTextIndex ? 'active' : ''}`}>
                    {text}
                </div>
            ))}
        </div>
    );
};

export default TextSlideshowOverlays;