import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	Moon,
	UFO,
	HeroContent,
	HeroH1,
	NameSpan,
	HeroContentWrapper,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
} from "./HeroElements";
import moon from "../../assests/images/moon.svg";
import ufo from "../../assests/images/ufo.svg";

const Hero = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer id='hero'>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
			<UFO src={ufo} alt='ufo' />
			<HeroContent>
				<HeroContentWrapper>
					<HeroH1>
						Hello, my name is <NameSpan>Matthew</NameSpan> and I am a full stack
						JavaScript developer.
					</HeroH1>
					<HeroBtnWrapper>
						<Button to='projects' onMouseEnter={onHover} onMouseLeave={onHover}>
							My Projects {hover ? <ArrowForward /> : <ArrowRight />}
						</Button>
					</HeroBtnWrapper>
				</HeroContentWrapper>
				<Moon src={moon} alt='moon' />
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
