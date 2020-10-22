import React from 'react';
import { NavLink } from 'react-router-dom'
import moon from '../assests/images/moon.svg'
import ufo from '../assests/images/ufo.svg'

const Hero = () => {
    return (
        <div>
            <img src={ufo} alt='ufo' />
            <div className='planet-container'>
                <div className='moon'>
                    <NavLink to="/" className='inactive'><img src={moon} alt='moon' /></NavLink>
                </div>
                <div className='plowey'>
                        <NavLink to="/" className='inactive'><h1>Hello, My name is Matthew Plowey and I am a full stack JavaScript developer</h1></NavLink>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;