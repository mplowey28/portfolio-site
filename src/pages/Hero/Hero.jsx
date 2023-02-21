import React, { useState, useContext } from "react";
import { Button } from "../../components/ButtonElement";
import {
  ArrowForward,
  ArrowRight,
  Crater1,
  Crater2,
  Crater3,
  Crater4,
  Crater5,
  EyeBlock,
  Face,
  HeroBtnWrapper,
  HeroContent,
  HeroContentWrapper,
  HeroH1,
  LeftEye,
  Moon,
  MoonContainer,
  Mouth,
  NameSpan,
  Orbit,
  RightEye,
  Rocket,
  Shadow,
  Sun,
  SunContainer,
  SunlightBox,
  SunlightBox1,
  SunlightBox2,
  SunlightBox3,
  UFO,
  Balloon,
  Window,
  Tongue,
} from "./HeroElements";
import ufo from "../../assests/images/ufo.svg";
import balloon from "../../assests/images/balloon.svg";
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";
import { ThemeContext } from "../../context/ThemeContext";

const Hero = () => {
  const { isDark } = useContext(ThemeContext);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <SectionWrapper id="hero">
      {isDark ? (
        <UFO src={ufo} alt="ufo" />
      ) : (
        <Balloon src={balloon} alt="balloon" />
      )}
      <HeroContent>
        <HeroContentWrapper>
          <HeroH1>
            Hello, my name is <NameSpan>Matthew</NameSpan> and I am a full-stack
            JavaScript developer.
          </HeroH1>
          <HeroBtnWrapper>
            <Button to="projects" onMouseEnter={onHover} onMouseLeave={onHover}>
              My Projects {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContentWrapper>
        <MoonContainer>
          {isDark ? (
            <>
              <Moon>
                <Face>
                  <EyeBlock>
                    <LeftEye />
                    <RightEye />
                  </EyeBlock>
                  <Mouth>
                    <Tongue />
                  </Mouth>
                </Face>
                <Crater1 />
                <Crater2 />
                <Crater3 />
                <Crater4 />
                <Crater5 />
                <Shadow />
              </Moon>
              <Orbit>
                <Rocket>
                  <Window />
                </Rocket>
              </Orbit>
            </>
          ) : (
            <SunContainer>
              <SunlightBox>
                <SunlightBox1 />
                <SunlightBox2 />
                <SunlightBox3 />
              </SunlightBox>
              <Sun>
                <Face>
                  <EyeBlock>
                    <LeftEye />
                    <RightEye />
                  </EyeBlock>
                  <Mouth>
                    <Tongue />
                  </Mouth>
                </Face>
              </Sun>
            </SunContainer>
          )}
        </MoonContainer>
      </HeroContent>
    </SectionWrapper>
  );
};

export default Hero;
