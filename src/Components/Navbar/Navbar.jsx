import React from 'react'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
      <div className='Main'>
        <div className='Nav'>
          <div><FontAwesomeIcon icon={faEnvelope} /> abcdxyz@mail.com</div>
          <div className='no'><FontAwesomeIcon icon={faPhone} /> 987654321</div>
          <div className='day'><FontAwesomeIcon icon={faClock} /> Mon - Sat : 9AM - 6PM</div>
        </div>
        <div className='baricon'><FontAwesomeIcon icon={faBars} /></div>
        <div className='Nav2'>
          <div>Login</div>
          <div>|</div>
          <div>Support</div>
          <div>|</div>
          <div>Languages</div>
        </div>
      </div>
    </>
  )
}

export default Navbar