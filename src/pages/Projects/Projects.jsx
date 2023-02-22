import React from "react";
import { sliderData } from "./content";
import {
  ProjectImgLink,
  LinkContainer,
  LiveDemoContainer,
  ProjectTitle,
} from "./ProjectsElements";
import {
  ExperienceH2,
  ExperienceWrapper,
} from "../Experience/ExperienceElements";
import { FaGithub, FaPlay } from "react-icons/fa";
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Card from "../../components/Card/Card";

const ProjectSlider = () => {
  return (
    <SectionWrapper percentHeight id="projects">
      <SectionHeader>Projects</SectionHeader>
      <ExperienceWrapper>
        {sliderData.map((card) => {
          return (
            <Card flexValue key={card.title}>
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
              <ExperienceH2>{card.desc}</ExperienceH2>
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
            </Card>
          );
        })}
      </ExperienceWrapper>
    </SectionWrapper>
  );
};

export default ProjectSlider;
