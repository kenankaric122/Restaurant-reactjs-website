import Flickity from 'react-flickity-component'
import React from 'react'
import image from '../images/carousel 1.png';
import image1 from '../images/carousel 2.png';
import image2 from '../images/carousel 3.png';
import image3 from '../images/text.svg';

import "../styles/flickity.css";



function Carousel() {
    return (
        <div className="carusel">
        <img src={image3} alt="image3" width="300" height="300" className="slika1"/>
        <div className="carr">
        <Flickity>
        <img src={image} alt="image" width="420" height="420" className="slika"/>
        <img src={image1} alt="image1" width="420" height="420" className="slika"/>
        <img src={image2} alt="image2" width="420" height="420" className="slika"/>
        </Flickity></div></div>
      );
}

export default Carousel;