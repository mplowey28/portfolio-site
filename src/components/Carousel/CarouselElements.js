import styled from "styled-components";

export const CarouselOuterContainer = styled.div`
  background: var(--color-background);
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CarouselH1 = styled.h1`
  font-size: 2.5rem;
  color: var(--color-highlight);
  margin-bottom: 20px;
`;

export const CarouselWrapper = styled.div`
  background: var(--color-background);
  color: var(--color-text);
  margin-top: 10%;
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  position: relative;
  width: auto;
  max-width: 60%;
`;

export const CarouselInner = styled.div`
  height: 50rem;
  position: relative;
  width: calc(30rem * 3);
`;

export const CarouselContainer = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const CarouselSlideList = styled.ul`
  height: 100%;
  left: 50%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  transform: translateX(-50%);
  width: calc((6 + 0.5) * 30rem * 2);
`;

export const CarouselSlideItemStyle = styled.li`
  height: 30rem;
  margin: 0;
  padding: 1rem;
  position: absolute;
  transition: all 0.3s;
  width: 30rem;
`;

export const CarouselSlideItemImgLink = styled.div`
  cursor: zoom-in;
  display: flex;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;

  img {
    height: 100%;
    object-fit: scale-down;
    transition: all 0.5s ease;
    width: 100%;
  }

  &:hover {
    &::after {
      opacity: 1;
    }

    img {
      transform: scale(1.3);
    }
  }
  video {
    height: 100%;
    object-fit: scale-down;
    transition: all 0.5s ease;
    width: 100%;
  }

  &:hover {
    &::after {
      opacity: 1;
    }

    video {
      transform: scale(1.3);
    }
  }
`;

export const CarouselSlideItemBody = styled.div`
  bottom: -2.5rem;
  height: 10%;
  position: absolute;

  h4 {
    margin: 0.7rem 0 0;
    text-transform: uppercase;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.3;
    margin: 0.7rem 0 0;
  }
`;

export const CarouselButton = styled.button`
  align-items: center;
  background: 0;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const CarouselButtonPrev = styled(CarouselButton)`
  left: -10rem;
`;
export const CarouselButtonNext = styled(CarouselButton)`
  right: -10rem;
`;

export const CarouselButtonArrow = styled.i`
  border: solid white;
  border-width: 0 0.4rem 0.4rem 0;
  height: 3rem;
  padding: 3px;
  width: 3rem;
  z-index: 10;
`;

export const CarouselButtonArrowLeft = styled(CarouselButtonArrow)`
  transform: rotate(135deg);
`;
export const CarouselButtonArrowRight = styled(CarouselButtonArrow)`
  transform: rotate(-45deg);
`;

export const CarouselDotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: 'center'
  margin-top: 2rem;
`;

export const CarouselDotsButton = styled.button`
  background: #ccc;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  height: 1rem;
  margin: 0 0.3rem;
  outline: none;
  transform: scale(0.5);
  width: 1rem;

  ${({ active }) =>
    active &&
    `
    background: #18A2D9;
  `}
`;

export const LinkContainer = styled.div`
  max-width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

export const GithubContainer = styled.a`
  background-color: #d7d8da;
  font-size: 1em;
  color: #020104;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: 0 0 5px #787878;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 20px;
  height: 30px;
  width: 100px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f3f3f3;
  }

  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: #2e2e2e;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const LiveDemoContainer = styled.a`
  background-color: #d7d8da;
  font-size: 1em;
  color: #020104;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: 0 0 5px #787878;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 20px;
  height: 30px;
  width: 100px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f3f3f3;
  }

  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: #2e2e2e;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
  }
`;
