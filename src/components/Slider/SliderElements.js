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

export const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  object-fit: scale-down;
  width: 80%;
  @media screen and (max-width: 480px) {
    width: 70%;
  }
`;

export const Video = styled.video`
  object-fit: cover;
  width: 80%;
  @media screen and (max-width: 480px) {
    width: 70%;
  }
`;

export const RightIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  font-size: 3rem;
  color: var(--color-text);
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const LeftIcon = styled(RightIcon)`
  left: 16px;
`;
