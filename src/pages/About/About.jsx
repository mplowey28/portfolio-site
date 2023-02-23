import photo from "../../assests/images/me.jpg";
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Card from "../../components/Card/Card";
import { homeObjOne } from "./data";

import { TextWrapper, SubTitle, ImgWrap, Img } from "./AboutElements";

const About = () => {
  return (
    <SectionWrapper percentHeight id={homeObjOne.id}>
      <SectionHeader>{homeObjOne.headline}</SectionHeader>
      <Card direction="row">
        <ImgWrap>
          <Img src={photo} alt={homeObjOne.alt} />
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
      </Card>
    </SectionWrapper>
  );
};

export default About;
