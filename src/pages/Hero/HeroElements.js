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

const RotateEye = keyframes`
0%,
35% {
  right: 3px;
}
65%,
100% {
  right: 10px;
}
`;

const Rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}`;

const ScaleMouth = keyframes`
  0% {
    height: 18px;
  }
  100% {
    height: 24px;
  }
  `;

const ScaleTongue = keyframes`
0% {
  height: 16px;
}
100% {
  height: 20px;
}
`;
const Animate1 = keyframes`
0% {
  left: 90%;
}
10% {
  left: 110%;
}
10.001% {
  left: -10%;
}
100% {
  left: 90%;
}
`;
const Animate2 = keyframes`
0% {
  left: 75%;
}
25% {
  left: 110%;
}
25.001% {
  left: -10%;
}
100% {
  left: 75%;
}
`;
const Animate3 = keyframes`
0% {
  left: 60%;
}
40% {
  left: 110%;
}
40.001% {
  left: -10%;
}
100% {
  left: 60%;
}
`;
const Animate4 = keyframes`
0% {
  left: 45%;
}
55% {
  left: 110%;
}
55.001% {
  left: -10%;
}
100% {
  left: 45%;
}
`;
const Animate5 = keyframes`
0% {
  left: 30%;
}
70% {
  left: 110%;
}
70.001% {
  left: -10%;
}
100% {
  left: 30%;
}
`;
const Animate6 = keyframes`
0% {
  left: 10%;
}
90% {
  left: 110%;
}
90.001% {
  left: -10%;
}
100% {
  left: 10%;
}
`;
const Animate7 = keyframes`
0% {
  left: -10%;
}

99.99% {
  left: 110%;
}
100% {
  left: -10%;
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

export const Balloon = styled(UFO)`
  animation: ${flyby} 200s linear infinite;
`;

export const CloudContent = styled.div`
  bottom: 0;
  left: 0;
  padding-top: 50px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;
`;

export const CloudBlock = styled.div`
  position: absolute;
  opacity: 0.8;
  top: 100px;
  animation: ${Animate1} 32s linear infinite;
  -webkit-animation: ${Animate1} 32s linear infinite;
  transform: scale(0.65);
  -webkit-transform: scale(0.65);
`;
export const CloudBlock2 = styled(CloudBlock)`
  top: 40vh;
  animation: ${Animate2} 37s linear infinite;
  -webkit-animation: ${Animate2} 37s linear infinite;
  transform: scale(0.45);
  -webkit-transform: scale(0.45);
`;
export const CloudBlock3 = styled(CloudBlock)`
  top: 20vh;
  animation: ${Animate3} 45s linear infinite;
  -webkit-animation: ${Animate3} 45s linear infinite;
  transform: scale(0.5);
  -webkit-transform: scale(0.5);
`;
export const CloudBlock4 = styled(CloudBlock)`
  top: 50vh;
  animation: ${Animate4} 50s linear infinite;
  -webkit-animation: ${Animate4} 50s linear infinite;
  transform: scale(0.4);
  -webkit-transform: scale(0.4);
`;
export const CloudBlock5 = styled(CloudBlock)`
  animation: ${Animate5} 55s linear infinite;
  -webkit-animation: ${Animate5} 55s linear infinite;
  transform: scale(0.55);
  -webkit-transform: scale(0.55);
  top: 65vh;
`;
export const CloudBlock6 = styled(CloudBlock)`
  animation: ${Animate6} 60s linear infinite;
  -webkit-animation: ${Animate6} 60s linear infinite;
  transform: scale(0.45);
  -webkit-transform: scale(0.45)7
  top: 35vh;
`;
export const CloudBlock7 = styled(CloudBlock)`
  animation: ${Animate7} 65s linear infinite;
  -webkit-animation: ${Animate7} 65s linear infinite;
  transform: scale(0.5);
  -webkit-transform: scale(0.5);
  bottom: 30px;
`;

export const Cloud = styled.div`
  width: 350px;
  height: 120px;
  border-radius: 100px;
  box-shadow: 0 16px 16px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 16px 16px rgba(0, 0, 0, 0.1);
  position: relative;
  background: #fff;
  :before {
    background: #fff;
    content: "";
    position: absolute;
    z-index: -1;
    width: 180px;
    height: 180px;
    right: 50px;
    top: -90px;
    border-radius: 200px;
  }
  :after {
    background: #fff;
    content: "";
    position: absolute;
    z-index: -1;
    width: 100px;
    height: 100px;
    left: 50px;
    top: -50px;
    border-radius: 100px;
  }
`;

export const HeroContent = styled.div`
  background-color: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(2px);
  border-radius: 10px;
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

export const Sun = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 100%;
  background-color: #fcc952;
  background-image: linear-gradient(
    145deg,
    rgba(252, 201, 82, 1) 0%,
    rgba(252, 201, 82, 1) 61%,
    rgba(248, 160, 55, 1) 100%
  );
  -webkit-background-image: linear-gradient(
    145deg,
    rgba(252, 201, 82, 1) 0%,
    rgba(252, 201, 82, 1) 61%,
    rgba(248, 160, 55, 1) 100%
  );
  box-shadow: inset 2px 2px 8px 0 rgba(252, 201, 82, 0),
    inset -3px -3px 8px 0 rgba(245, 169, 76, 0),
    6px 6px 18px 0 rgba(204, 123, 35, 0.35),
    -6px -6px 18px 0 rgba(205, 157, 35, 0.5);
  -webkit-box-shadow: inset 2px 2px 8px 0 rgba(252, 201, 82, 0),
    inset -3px -3px 8px 0 rgba(245, 169, 76, 0),
    6px 6px 18px 0 rgba(204, 123, 35, 0.35),
    -6px -6px 18px 0 rgba(205, 157, 35, 0.5);
  position: relative;
`;

export const SunlightBox = styled.div`
  position: absolute;
  filter: drop-shadow(0px 0px 12px rgba(252, 201, 82, 0.8));
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  animation: ${Rotate} 20s linear infinite;
  -webkit-animation: ${Rotate} 20s linear infinite;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;

export const SunlightBox1 = styled.span`
  height: 170px;
  width: 170px;
  background-color: #f8a037;
  position: absolute;
  top: 0px;
  left: 0px;
  transform: rotate(30deg);
  -webkit-transform: rotate(30deg);
`;
export const SunlightBox2 = styled(SunlightBox1)`
  transform: rotate(60deg);
  -webkit-transform: rotate(60deg);
`;
export const SunlightBox3 = styled(SunlightBox1)`
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
`;

export const Moon = styled.div`
  background-color: #39beff;
  height: 170px;
  width: 170px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;
export const SunContainer = styled.div`
  position: relative;
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

export const Face = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;

export const EyeBlock = styled.div`
  width: 80px;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`;

export const LeftEye = styled.span`
  background-color: #2e261a;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  display: inline-flex;
  display: -webkit-inline-flex;
  position: relative;

  :before {
    content: "";
    height: 6px;
    width: 6px;
    display: block;
    position: absolute;
    top: 3px;
    background-color: #fff;
    border-radius: 100%;
    animation: ${RotateEye} 4s ease-in-out alternate infinite;
    -webkit-animation: ${RotateEye} 4s ease-in-out alternate infinite;
  }
`;
export const RightEye = styled(LeftEye)``;

export const Mouth = styled.div`
  width: 18px;
  height: 18px;
  background-color: #2f261a;
  text-align: center;
  margin: 0px auto;
  position: absolute;
  overflow: hidden;
  border-radius: 0px 0px 25px 25px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  top: 100%;
  animation: ${ScaleMouth} 2s linear infinite;
  -webkit-animation: ${ScaleMouth} 2s linear infinite;
`;

export const Tongue = styled.span`
  width: 100%;
  height: 16px;
  background-color: #f54b2e;
  border-radius: 100%;
  position: absolute;
  bottom: -6px;
  left: 0;
  animation: ${ScaleTongue} 2s linear infinite;
  -webkit-animation: ${ScaleTongue} 2s linear infinite;
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
