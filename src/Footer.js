import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll';
import image1 from './images/instagram.svg';
import image2 from './images/facebook.svg';
import image3 from './images/twt.svg';

function Footer() {
    return (
        <div className="footer">
            <ul className='menu'>
                <li><Link to="#">START A PROJECT</Link></li>
                <li><Link to="#"> </Link></li>
                <li><Link to="#"> </Link></li>
                <li className="link1"><Link to="#">We are ready for the challenge adobexd@mail.com</Link></li>
            </ul>
            <ul className='menu1'>
                <li><Link to="#">SAY HELLO</Link></li>
                <li><Link to="#"> </Link></li>
                <li><Link to="#"> </Link></li>
                <li className="link1"><Link to="#">497 Evergreen Rd. Roseville, CA 95673 +44 345 678 903</Link></li>
            </ul>
            <ul className='menu'>
                <li><Link to="#">JOBS</Link></li>
                <li><Link to="#"> </Link></li>
                <li><Link to="#"> </Link></li>
                <li className="link1"><Link to="#">We are always looking for talent adobexd@mail.com</Link></li>
            </ul>
        </div>
    )
}

export default Footer
