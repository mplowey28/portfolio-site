import React from 'react'
import { ExperienceContainer, ExperienceWrapper, ExperienceH1, ExperienceCard, ExperienceImg, ExperienceH2, ExperienceP } from './ExperienceElements'

const Experience = () => {
    return (
        <ExperienceContainer id="experience">
            <ExperienceH1>Experience</ExperienceH1>
            <ExperienceWrapper>
                <ExperienceCard>
                    <ExperienceImg />
                    <ExperienceH2>Project 1</ExperienceH2>
                    <ExperienceP>Todo List made with TypeScript</ExperienceP>
                </ExperienceCard>
            </ExperienceWrapper>
        </ExperienceContainer>
    )
}

export default Experience
