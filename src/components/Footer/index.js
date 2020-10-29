import React from 'react';
import { FooterContainer, FooterWrapper, Telescope, LinksWrapper, LinkedIn, GitHub, FooterInfo, FooterText } from './FooterElements'
import linkedin from '../../assests/images/linkedin.svg'
import github from '../../assests/images/github.svg'
import telescope from '../../assests/images/telescope.svg'

const Footer  = () => {
    return ( 
            <FooterContainer>
                <FooterWrapper>
                    <FooterInfo>
                        <LinksWrapper>
                            <a href="https://www.linkedin.com/in/matthew-plowey" target="_blank">
                                <LinkedIn src={linkedin}/>
                            </a>
                            <a href="https://www.github.com/mplowey28" target="_blank">
                                <GitHub src={github}/>
                            </a>
                        </LinksWrapper>
                        <FooterText><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Matthew Plowey 2020</FooterText>
                    </FooterInfo>
                    <Telescope src={telescope} alt='telescope' />
                </FooterWrapper>
            </FooterContainer>
     );
}
 
export default Footer ;