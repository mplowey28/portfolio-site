import React, { useContext } from "react";
import {
  Basket,
  FooterContainer,
  FooterWrapper,
  Telescope,
  LinksWrapper,
  LinkedIn,
  GitHub,
  FooterInfo,
  FooterText,
} from "./FooterElements";
import linkedin from "../../assests/images/linkedin.svg";
import github from "../../assests/images/github.svg";
import telescope from "../../assests/images/telescope.svg";
import basket from "../../assests/images/basket.svg";
import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <FooterContainer>
      <FooterWrapper dark={isDark}>
        <FooterInfo>
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
          <FooterText>
            <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> Matthew
            Plowey 2023
          </FooterText>
        </FooterInfo>
        {isDark ? (
          <Telescope src={telescope} alt="telescope" />
        ) : (
          <Basket src={basket} alt="basket" />
        )}
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
