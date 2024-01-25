import React, { useState, useEffect } from 'react';

const TextSlideshowOverlays = (props) => {
    const token = localStorage.getItem("authTokens");   // if token is null, the user doesn't exist

    // to keep track of current index
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // to switch to the next image
        const nextText = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
        };

        // change the number for how many miliseconds between images
        const intervalId = setInterval(nextText, 15000);

        return () => clearInterval(intervalId);
    });

    // when you continue make sure to maybe pass props into this component for a text list
    // also props being sent into the component might not be the best solution so keep testing

    return (
        <div>
            <div className={`overlay-text ${0 === currentIndex ? 'active' : ''}`}>
                Welcome TO GVF LURES!
            </div>
        </div>
    );
};

export default TextSlideshowOverlays;