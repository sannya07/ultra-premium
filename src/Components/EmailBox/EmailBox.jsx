import React from 'react'
import './EmailBox.css';
function EmailBox() {
  return (
    <div className='blackWhiteBox'>
        <div className='bluebox'>
            <div className='MainText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className='emailBox'>
                <input type='text' className='emailarea' placeholder='Enter Email adress'></input>
                <div className='join'>Join</div>
            </div>
        </div>
    </div>
  )
}

export default EmailBox