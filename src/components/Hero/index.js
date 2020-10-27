import React from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg,  Moon, UFO, HeroContent, HeroH1 } from './HeroElements'
import moon from '../../assests/images/moon.svg'
import ufo from '../../assests/images/ufo.svg'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <UFO src={ufo} alt="ufo"/>
                <HeroContent>
                    <HeroH1>Hello, My name is Matthew and I am a full stack JavaScript developer.</HeroH1>
                    <Moon src={moon} alt="moon"/>
                </HeroContent>
        </HeroContainer>
    )
}

export default Hero
