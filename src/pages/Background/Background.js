import React from 'react';
import './Background.css';

const Background = () => {
    const imagePath = process.env.PUBLIC_URL + '/Background.png';
    return (
        <div className="background-container">
            <img src={imagePath} alt="Background" className="background-image" />
        </div>
    );
}

export default Background;
