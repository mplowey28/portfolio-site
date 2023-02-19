import photo from "../../assests/images/me.jpg";
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import {
  InfoWrapper,
  TextWrapper,
  SubTitle,
  ImgWrap,
  Img,
} from "./AboutElements";

const About = ({ id, headline, alt }) => {
  return (
    <SectionWrapper percentHeight id={id}>
      <SectionHeader>{headline}</SectionHeader>
      <InfoWrapper>
        <ImgWrap>
          <Img src={photo} alt={alt} />
        </ImgWrap>
        <TextWrapper>
          <SubTitle>
            I am an experienced full-stack JavaScript Developer with a
            demonstrated history of working with React, React Native, and
            Node.js. <br /> <br />
            Before becoming a developer, I worked as a researcher and teacher
            who acquired a strong interest in development through hobby coding
            and through my work as a researcher. <br />
            <br />I enjoy communicating technical concepts and developing apps
            and services that are both user-friendly and visually appealing.
          </SubTitle>
        </TextWrapper>
      </InfoWrapper>
    </SectionWrapper>
  );
};

export default About;
