import React from 'react';
import { FooterContainer, FooterWrapper, Telescope, LinkedIn, GitHub } from './FooterElements'
import linkedin from '../../assests/images/linkedin.svg'
import github from '../../assests/images/github.svg'
import telescope from '../../assests/images/telescope.svg'

const Footer  = () => {
    return ( 
            <FooterContainer>
                <FooterWrapper>
                    <LinkedIn src={linkedin}/>
                    <GitHub src={github}/>
                    <Telescope src={telescope} alt='telescope' />
                </FooterWrapper>
            </FooterContainer>
     );
}
 
export default Footer ;