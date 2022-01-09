import styled from "styled-components";

export const SliderContainer = styled.div`
  color: var(--color-text);
  background: var(--color-background);
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  object-fit: scale-down;
  width: 1000px;

  @media screen and (max-width: 1200px) {
    width: 900px;
  }
  @media screen and (max-width: 1000px) {
    width: 600px;
  }
  @media screen and (max-width: 750px) {
    width: 400px;
  }
  @media screen and (max-width: 460px) {
    width: 200px;
  }
`;

export const Video = styled.video`
  object-fit: scale-down;
  width: 1000px;

  @media screen and (max-width: 1200px) {
    width: 900px;
  }
  @media screen and (max-width: 1000px) {
    width: 600px;
  }
  @media screen and (max-width: 750px) {
    width: 400px;
  }
  @media screen and (max-width: 460px) {
    width: 200px;
  }
`;

export const RightIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: var(--color-text);
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const LeftIcon = styled(RightIcon)`
  left: 32px;
`;

export const SlideContainer = styled.div``;
