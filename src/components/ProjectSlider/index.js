import React from "react";
import { sliderData } from "./content";
import {
  SliderContainer,
  Heading,
  ProjectCardsWrapper,
  ProjectCard,
  ProjectImgLink,
  LinkContainer,
  LiveDemoContainer,
  ProjectTitle,
} from "./ProjectSliderElements";
import { FaGithub, FaPlay } from "react-icons/fa";

const ProjectSlider = () => {
  return (
    <SliderContainer id="projects">
      <Heading>Projects</Heading>
      <ProjectCardsWrapper>
        {sliderData.map((card) => {
          return (
            <ProjectCard key={card.title}>
              <ProjectTitle>{card.title}</ProjectTitle>
              <ProjectImgLink>
                {card.type === "img" ? (
                  <img src={card.image} alt={card.title} />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    src={card.image}
                    type="video/mp4"
                  />
                )}
              </ProjectImgLink>
              <p>{card.desc}</p>
              <LinkContainer>
                <LiveDemoContainer
                  href={card.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  Code
                </LiveDemoContainer>

                {card?.demo && (
                  <LiveDemoContainer
                    href={card.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaPlay />
                    Demo
                  </LiveDemoContainer>
                )}
              </LinkContainer>
            </ProjectCard>
          );
        })}
      </ProjectCardsWrapper>
    </SliderContainer>
  );
};

export default ProjectSlider;
