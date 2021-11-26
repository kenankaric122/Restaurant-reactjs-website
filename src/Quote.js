import React from 'react'
import './Quote.css';
import image from './images/qtt.png';

function Quote() {
    return (
        <div className="quote">
            <img src={image} alt="image" width="1049" height="305" className="sl"></img>
        </div>
    )
}

export default Quote
