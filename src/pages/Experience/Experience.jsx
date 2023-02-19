import {
  ExperienceWrapper,
  ExperienceCard,
  ExperienceImg,
  ExperienceH2,
  ExperienceP,
} from "./ExperienceElements";
import Salt from "../../assests/images/salt.jpg";
import Flowbox from "../../assests/images/flowbox.png";
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const Experience = () => {
  return (
    <SectionWrapper percentHeight id="experience">
      <SectionHeader>Experience</SectionHeader>
      <ExperienceWrapper>
        <ExperienceCard>
          <ExperienceImg
            src="https://assets.qliro.com/shared/se/sv/logo/1/logo_text_mint.png"
            alt="flowbox logo"
          />
          <ExperienceH2>Software Engineer</ExperienceH2>
          <ExperienceP>May 2022 - Present</ExperienceP>
        </ExperienceCard>
        <ExperienceCard>
          <ExperienceImg src={Flowbox} alt="flowbox logo" />
          <ExperienceH2>Team Lead and Front-end Developer</ExperienceH2>
          <ExperienceP>Dec 2020 - April 2022</ExperienceP>
        </ExperienceCard>
        <ExperienceCard>
          <ExperienceImg src={Salt} alt="salt logo" />
          <ExperienceH2>
            Full-stack JavaScript - School of Applied Technology &lt;/salt&gt;
          </ExperienceH2>
          <ExperienceP>
            Intensive three month training program for full-stack web
            development with a focus on TDD, mob programming, and applied
            learning.
          </ExperienceP>
        </ExperienceCard>
      </ExperienceWrapper>
    </SectionWrapper>
  );
};

export default Experience;