import { Link } from 'react-router-dom';
import './NavbarTwo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavbarTwo() {
  return (
    <>
     <div className='MainTwo'>
        <div className='MainLogoDiv'>
            <div className='Logo'>
                <div><span className='ultra'>ULTRA</span><span className='premium'>PREMIUM</span></div>
                <div className='psd'>Psdfreebies.com</div>
            </div>
            <div className='baricon'><FontAwesomeIcon icon={faBars} /></div>
            <div className='links'>
                <ul>
                <li><Link to="/">Home</Link></li>
                    <li ><Link style={{marginLeft:"10px"}} to="/pageTwo">PageTwo</Link></li>
                    <li className='Nav-links'><Link style={{marginLeft:"10px",}} to="/pageTwo">Gallery</Link></li>
                    <li className='Nav-links'><Link style={{marginLeft:"10px"}} to="/pageTwo">Pages</Link></li>
                    <li className='Nav-links'><Link style={{marginLeft:"10px"}} to="/pageTwo">Blog</Link></li>
                    <li className='Nav-links'><Link style={{marginLeft:"10px"}} to="/pageTwo">Contact</Link></li>

                </ul>
            </div>
        </div>
     </div>
    </>
  )
}

export default NavbarTwo