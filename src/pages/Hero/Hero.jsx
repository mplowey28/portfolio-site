import React, { useState, useContext } from "react";
import { Button } from "../../components/ButtonElement";
import Card from "../../components/Card/Card";
import {
  ArrowForward,
  ArrowRight,
  Cloud,
  CloudContent,
  CloudBlock2,
  CloudBlock3,
  CloudBlock4,
  CloudBlock5,
  CloudBlock6,
  CloudBlock7,
  Crater1,
  Crater2,
  Crater3,
  Crater4,
  Crater5,
  EyeBlock,
  Face,
  HeroBtnWrapper,
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
      {!isDark && (
        <CloudContent>
          <CloudBlock2>
            <Cloud />
          </CloudBlock2>
          <CloudBlock3>
            <Cloud />
          </CloudBlock3>
          <CloudBlock4>
            <Cloud />
          </CloudBlock4>
          <CloudBlock5>
            <Cloud />
          </CloudBlock5>
          <CloudBlock6>
            <Cloud />
          </CloudBlock6>
          <CloudBlock7>
            <Cloud />
          </CloudBlock7>
        </CloudContent>
      )}
      <Card direction="row">
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
      </Card>
    </SectionWrapper>
  );
};

export default Hero;
