import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
function PageTwo() {
  return (
    <div className='WhyusMain'>
        <div className='HeroText' style={{marginTop:"100px"}}> This is Our Page Two With Router functionallity</div>
        <div className='whyusText'>Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa. Aenean eleifend.</div>
        <div className='threeBoxes'>
            <div className='Box'>
                <div className='blueCircle'><FontAwesomeIcon icon={faShareNodes} /></div>
                <div className='threeboxText'>Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa. Aenean eleifend.</div>
            </div>
            <div className='Box'>
                <div className='blueCircle'><FontAwesomeIcon icon={faLightbulb} /></div>
                <div className='threeboxText'>Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa. Aenean eleifend.</div>
            </div>
            <div className='Box'>
                <div className='blueCircle'><FontAwesomeIcon icon={faClock} /></div>
                <div className='threeboxText'>Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa. Aenean eleifend.</div>
            </div>
        </div>
        <div className='twoBoxes'>
            <div className='firstBox'>
                <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
                <div className='point'>
                    <div className='icon'><FontAwesomeIcon icon={faCheck} /> </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
                </div>
                <div className='point'>
                    <div className='icon'><FontAwesomeIcon icon={faCheck} /> </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
                </div>
                <div className='point'>
                    <div className='icon'><FontAwesomeIcon icon={faCheck} /> </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
                </div>
            </div>
            <div className='firstBox secondbox'>
                <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
            </div>
        </div>
    </div>
  )
}

export default PageTwo