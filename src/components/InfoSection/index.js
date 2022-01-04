import photo from "../../assests/images/me.jpg";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  SubTitle,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({ id, imgStart, headline, alt }) => {
  return (
    <>
      <InfoContainer id={id}>
        <Heading>{headline}</Heading>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <ImgWrap>
                <Img src={photo} alt={alt} />
              </ImgWrap>
            </Column1>
            <Column2>
              <TextWrapper>
                <SubTitle>
                  I am an experienced full-stack JavaScript Developer with a
                  demonstrated history of working with React, React Native, and
                  Node.js. <br /> <br />
                  Before becoming a developer, I worked as a researcher and
                  teacher who acquired a strong interest in development through
                  hobby coding and through my work as a researcher. <br />
                  <br />I enjoy communicating technical concepts and developing
                  apps and services that are both user-friendly and visually
                  appealing.
                </SubTitle>
              </TextWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
