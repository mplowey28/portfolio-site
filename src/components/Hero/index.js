import React from 'react'
import { HeroContainer,  Moon, UFO, HeroElements, HeroH1 } from './HeroElements'
import moon from '../../assests/images/moon.svg'
import ufo from '../../assests/images/ufo.svg'

const Hero = () => {
    return (
        <HeroContainer>
            <UFO src={ufo} alt="ufo"/>
            <HeroElements>
            <Moon><img src={moon} alt="moon"/></Moon>
            <HeroH1>Hello, My name is Matthew and I am a full stack JavaScript developer</HeroH1>
            </HeroElements>
        </HeroContainer>
    )
}

export default Hero
