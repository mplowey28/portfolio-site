import React from 'react'
import { sliderData } from './content'
import {
  SliderContainer,
  ProjectCard,
  ProjectImgLink,
  LinkContainer,
  LiveDemoContainer,
  ProjectTitle,
  ProjectDescription,
} from './ProjectSliderElements'
import { FaGithub, FaPlay } from 'react-icons/fa'
import AliceCarousel from 'react-alice-carousel'

const slides = sliderData.map((card) => {
  return (
    <ProjectCard key={card.title}>
      <ProjectTitle>{card.title}</ProjectTitle>
      <ProjectImgLink>
        {card.type === 'img' ? (
          <img src={card.image} alt={card.title} />
        ) : (
          <video autoPlay loop muted src={card.image} type='video/mp4' />
        )}
      </ProjectImgLink>
      <ProjectDescription>{card.desc}</ProjectDescription>
      <LinkContainer>
        <LiveDemoContainer
          href={card.github}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
          Code
        </LiveDemoContainer>

        {card?.demo && (
          <LiveDemoContainer
            href={card.demo}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaPlay />
            Demo
          </LiveDemoContainer>
        )}
      </LinkContainer>
    </ProjectCard>
  )
})

const ProjectSlider = () => {
  return (
    <SliderContainer id='projects'>
      <h1>Projects</h1>
      <AliceCarousel items={slides} />
    </SliderContainer>
  )
}

export default ProjectSlider
