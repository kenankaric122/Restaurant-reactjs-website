import React from 'react'
import './Mapa.css'
import image from './images/mapa.png';
import image1 from './images/mjesto.png';

function Mapa() {
    return (
        <div className="mapa">
        <img src={image1} alt="image" width="483" height="115" className="slika111"></img>
        <img src={image} alt="image" width="1024" height="520" className="slika22"></img>
        </div>
    )
}

export default Mapa
