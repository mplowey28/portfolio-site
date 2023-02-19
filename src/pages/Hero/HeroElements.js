import styled, { keyframes } from "styled-components";
import { MdKeyboardArrowDown, MdArrowDownward } from "react-icons/md";

const flyby = keyframes`
  from {
    transform: translateX(-100)
  }

  to {
    transform: translateX(4000px)
  }
`;

export const UFO = styled.img`
  z-index: 4;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  width: 40px;
  margin-top: 80px;
  animation: ${flyby} 45s linear infinite;
`;
export const HeroContent = styled.div`
  background-color: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  -webkit-backdrop-filter: blur(2px);
  z-index: 3;
  max-width: 1200px;
  display: flex;
  direction: row;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 875px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
export const HeroContentWrapper = styled.div`
  background: transparent;
  z-index: 3;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const HeroH1 = styled.h1`
  color: var(--color-text);
  font-size: 32px;
  padding: 24px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
export const NameSpan = styled.span`
  color: #f7f7f6;
  font-size: 32px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ArrowForward = styled(MdArrowDownward)`
  margin-left: 8px;
  font-size: 24px;
`;

export const ArrowRight = styled(MdKeyboardArrowDown)`
  margin-left: 8px;
  font-size: 24px;
`;
export const MoonContainer = styled.div`
  height: 370px;
  width: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Moon = styled.div`
  background-color: #39beff;
  height: 170px;
  width: 170px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Crater1 = styled.div`
  background-color: #31b4ff;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  position: relative;
  top: 27px;
  left: 90px;
  transform: scale(0.9);

  :before {
    content: "";
    position: absolute;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    box-shadow: -5px 0 0 2px #1ca4f9;
    top: 2px;
    left: 7px;
  }
`;
export const Crater2 = styled(Crater1)`
  top: 15px;
  left: 61px;
  transform: scale(0.6);
`;

export const Crater3 = styled(Crater1)`
  left: 15px;
  transform: scale(0.75);
`;

export const Crater4 = styled(Crater1)`
  top: 32px;
  left: 107px;
  transform: scale(1.18);
`;

export const Crater5 = styled(Crater1)`
  top: 4px;
  left: 33px;
  transform: scale(0.65);
`;

export const Shadow = styled.div`
  height: 190px;
  width: 190px;
  box-shadow: 21px 0 0 5px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  position: relative;
  bottom: 157.5px;
  right: 46px;
`;
export const LeftEye = styled.div`
  height: 12px;
  width: 12px;
  background-color: #161616;
  position: relative;
  border-radius: 50%;
  bottom: 255px;
  left: 59px;
`;
export const RightEye = styled(LeftEye)`
  border-radius: 50%;
  bottom: 267px;
  left: 101px;
`;
export const Mouth = styled.div`
  height: 5px;
  width: 10px;
  border: 3px solid #161616;
  position: relative;
  bottom: 262px;
  left: 82px;
  border-top: none;
  border-radius: 0 0 10px 10px;
`;
export const BlushLeft = styled.div`
  height: 7.5px;
  width: 7.5px;
  background-color: #1ca4f9;
  position: relative;
  border-radius: 50%;
  bottom: 273px;
  left: 50px;
`;
export const BlushRight = styled(BlushLeft)`
  bottom: 281px;
  left: 115px;
`;

const spin = keyframes`
 100% {
    transform: rotate(360deg);
  }

`;
export const Orbit = styled.div`
  height: 280px;
  width: 280px;
  border-radius: 50%;
  position: absolute;
  animation: ${spin} 10s infinite linear;
`;
export const Rocket = styled.div`
  background-color: #fafcf7;
  height: 50px;
  width: 25px;
  border-radius: 50% 50% 0 0;
  position: relative;
  left: -11px;
  top: 115px;

  :before {
    content: "";
    position: absolute;
    background-color: #39beff;
    height: 20px;
    width: 55px;
    z-index: -1;
    border-radius: 50% 50% 0 0;
    right: -15px;
    bottom: 0;
  }
  :after {
    content: "";
    position: absolute;
    background-color: #39beff;
    height: 4px;
    width: 15px;
    border-radius: 0 0 2px 2px;
    bottom: -4px;
    left: 4.3px;
  }
`;
export const Window = styled.div`
  height: 10px;
  width: 10px;
  background-color: #151845;
  border: 2px solid #b8d2ec;
  border-radius: 50%;
  position: relative;
  top: 17px;
  left: 7px;
`;