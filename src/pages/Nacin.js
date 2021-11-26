import React from 'react'
import '../styles/Nacin.css';
import { Link } from 'react-scroll';
import image from '../images/ciko.png';

function Nacin() {
    return (
        <div className='home11'>
            <img src={image} alt="image" width="780" height="360" className="slika45"></img>
            <div className='home22'>
            <h1 className="naslov1">Jedinstven način kuhinje</h1>
            <p className="kuhinja12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            </div>
        </div>
    )
}

export default Nacin
