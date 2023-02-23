import {
  ExperienceWrapper,
  ExperienceImg,
  ExperienceH2,
  ExperienceP,
} from "./ExperienceElements";
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";
import { employers } from "./data";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Card from "../../components/Card/Card";

const Experience = () => {
  return (
    <SectionWrapper percentHeight id="experience">
      <SectionHeader>Experience</SectionHeader>
      <ExperienceWrapper>
        {employers.map((employer) => (
          <Card flexValue key={employer.id}>
            <ExperienceImg src={employer.imgUri} alt="qliro logo" />
            <ExperienceH2>{employer.title}</ExperienceH2>
            <ExperienceP>{employer.description}</ExperienceP>
          </Card>
        ))}
      </ExperienceWrapper>
    </SectionWrapper>
  );
};

export default Experience;
