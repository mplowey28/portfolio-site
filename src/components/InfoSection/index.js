import photo from "../../assests/images/me.jpg";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

import {
  InfoWrapper,
  TextWrapper,
  SubTitle,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({ id, imgStart, headline, alt }) => {
  return (
    <SectionWrapper percentHeight id={id}>
      <h1>{headline}</h1>
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

export default InfoSection;
