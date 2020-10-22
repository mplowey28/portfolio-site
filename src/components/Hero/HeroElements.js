import styled, { keyframes } from 'styled-components';

export const HeroContainer = styled.div`
    background: #020104;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    min-height: calc("100vh - 80px");
    position: relative;
    z-index: 1;
    overflow: hidden;
`
const flyby = keyframes`
  from {
    transform: translateX(-500)
  }

  to {
    transform: translateX(4000px)
  }
`;

export const UFO = styled.img`
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    width: 40px;
    animation: ${flyby} 45s linear infinite;
`
export const HeroElements = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
`
export const HeroH1 = styled.h1`
    color: #bebab4;
    font-size: 2rem;
`
export const Moon = styled.div`
    height: 400px;
    width: 400px;
`