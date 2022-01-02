import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  ArrowForward,
  ArrowRight,
  BlushLeft,
  BlushRight,
  Crater1,
  Crater2,
  Crater3,
  Crater4,
  Crater5,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
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
  UFO,
  VideoBg,
  Window,
} from "./HeroElements";
import ufo from "../../assests/images/ufo.svg";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="hero">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <UFO src={ufo} alt="ufo" />
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
          <Moon>
            <Crater1></Crater1>
            <Crater2></Crater2>
            <Crater3></Crater3>
            <Crater4></Crater4>
            <Crater5></Crater5>
            <Shadow></Shadow>
            <LeftEye></LeftEye>
            <RightEye></RightEye>
            <Mouth></Mouth>
            <BlushLeft></BlushLeft>
            <BlushRight></BlushRight>
          </Moon>
          <Orbit>
            <Rocket>
              <Window></Window>
            </Rocket>
          </Orbit>
        </MoonContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
