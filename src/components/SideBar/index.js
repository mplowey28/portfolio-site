import React from 'react'
import {
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarWrapper,
    SideBarMenu,
    SideBarLink
} from './SideBarElements'

const SideBar = ({ isOpen, toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about">
                        About
                    </SideBarLink>
                    <SideBarLink to="projects">
                        Projects
                    </SideBarLink>
                    <SideBarLink to="Skills">
                        Skills
                    </SideBarLink>
                    <SideBarLink to="Experience">
                        Experience
                    </SideBarLink>
                    <SideBarLink to="contact">
                        Contact
                    </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar