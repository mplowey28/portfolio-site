import React, { useContext } from "react";
import linkedin from "../../assests/images/linkedin.svg";
import github from "../../assests/images/github.svg";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  LinksWrapper,
  LinkedIn,
  GitHub,
} from "./SideBarElements";
import Toggle from "../Toggle/Toggle";
import { ThemeContext } from "../../context/ThemeContext";

const SideBar = ({ isOpen, toggle }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <SideBarContainer isOpen={isOpen} isDark={isDark}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle}>
            About
          </SideBarLink>
          <SideBarLink to="projects" onClick={toggle}>
            Projects
          </SideBarLink>
          <SideBarLink to="skills" onClick={toggle}>
            Skills
          </SideBarLink>
          <SideBarLink to="experience" onClick={toggle}>
            Experience
          </SideBarLink>
          <SideBarLink to="contact" onClick={toggle}>
            Contact
          </SideBarLink>
          <LinksWrapper>
            <a
              href="https://www.linkedin.com/in/matthew-plowey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn src={linkedin} />
            </a>
            <a
              href="https://www.github.com/mplowey28"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub src={github} />
            </a>
          </LinksWrapper>
          <Toggle />
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
