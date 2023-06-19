import React from 'react';
import backgroundImg from "../../assets/imgs/landing/landing-background.jpg"

function BackgroundImage() {
    // const backgroundImg = "../../assets/imgs/landing/landing-background.jpg"
    return (
        <div
            className="h-screen flex justify-center items-center"
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Content of your component */}
        </div>
    );
}

export default BackgroundImage;