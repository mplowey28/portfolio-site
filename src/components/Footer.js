import React from 'react';
import linkedin from '../assests/images/linkedin.svg'
import github from '../assests/images/github.svg'
import telescope from '../assests/images/telescope.svg'

const Footer  = () => {
    return ( 
        <div className='footer-container'>
            <div className='link-container'>
                <a href="https://www.linkedin.com/in/matthew-plowey" className='inactive' target="_blank" rel="noopener noreferrer"><img src={linkedin} alt='linkedin' /></a>
                <a href="https://www.linkedin.com/in/matthew-plowey" className='inactive' target="_blank" rel="noopener noreferrer"><img src={github} alt='github' /></a>
                <h3>Plowey Consulting</h3>
            </div>
            <img className='telescope' src={telescope} alt='telescope' />
        </div>
        
     );
}
 
export default Footer ;