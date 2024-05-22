import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope,faClock } from '@fortawesome/free-solid-svg-icons';
function Footer() {
    return (
        <div >
            <div className='main-footer-links'>
                <div className='Footer-Main'>
                    <div className='Logo1'>
                        <div><span className='ultra1'>ULTRA</span><span className='premium1'>PREMIUM</span></div>
                        <div className='psd1'>Psdfreebies.com</div>
                    </div>
                    <div className='textVero'>Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quasoa molestias excepturi sintal occaecati cupiditate non provident similique sunt.</div>
                </div>
                <ul className='footer-links'>
                    <li className='Title'>Quick Links</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Company</li>
                    <li>Our Services</li>
                    <li>Service</li>
                    <li>Location</li>
                    <li>Recent News</li>
                    <li>Contact us</li>
                </ul>
                <ul className='footer-links'>
                    <li className='Title'>Quick Links</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Company</li>
                    <li>Our Services</li>
                    <li>Service</li>
                    <li>Location</li>
                    <li>Recent News</li>
                    <li>Contact us</li>
                </ul>
                <ul className='footer-links'>
                    <li className='Title'>Quick Links</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Company</li>
                    <li>Our Services</li>
                    <li>Service</li>
                    <li>Location</li>
                    <li>Recent News</li>
                    <li>Contact us</li>
                </ul>
            </div>
             <div className='Main-social'>
                <div className='All-social'>
                    <div className='Social'><FontAwesomeIcon className='icon2' icon={faPhone} /></div>
                    <div className='Social'><FontAwesomeIcon className='icon2' icon={faEnvelope} /></div>
                    <div className='Social'><FontAwesomeIcon className='icon2' icon={faClock} /></div>
                    <div className='Social'><FontAwesomeIcon className='icon2' icon={faPhone} /></div>

                </div>
                <div style={{width:"50%"}}></div>
            </div>
        </div>
    )
}

export default Footer