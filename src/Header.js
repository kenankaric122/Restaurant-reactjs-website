import React from 'react'
import './Header.css';
import { Link } from 'react-scroll';
import image from './images/video.svg';

export default function Header() {
    return (
        <div className='home1'>
            <div className='home2'>
            <p className="kuhinja">Kuhinja</p>
            <h1 className="naslov">Poseban način kuhanja</h1>
            <p className="kuhinja1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            </div>
            <img src={image} alt="image" width="780" height="360" className="slika"></img>
        </div>
    )
}
