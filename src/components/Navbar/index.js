import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import linkedin from '../../assests/images/linkedin.svg'
import github from '../../assests/images/github.svg'
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    LinkedIn,
    GitHub 
} from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => window.scrollY >= 60 ? setScrollNav(true) : setScrollNav(false)

    const toggleHome = () => scroll.scrollToTop();
    
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome}>Matthew Plowey</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} duration={500} spy={true} exact='true' offset={-60}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects"
                            smooth={true} duration={500} spy={true} exact='true' offset={-60}
                            >Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills"
                            smooth={true} duration={500} spy={true} exact='true' offset={-60}
                            >Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="experience"
                            smooth={true} duration={500} spy={true} exact='true' offset={-60}
                            >Experience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                            smooth={true} duration={500} spy={true} exact='true' offset={-60}
                            >Contact</NavLinks>
                        </NavItem>
                        <a href="https://www.linkedin.com/in/matthew-plowey" target="_blank">
                            <LinkedIn src={linkedin}/>
                        </a>
                        <a href="https://www.github.com/mplowey28" target="_blank">
                            <GitHub src={github}/>
                        </a>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
