import styled from "styled-components";

export const SkillsContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-background);

  @media screen and (max-width: 1000px) {
    height: 2000px;
  }
`;

export const SkillsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const SkillsCard = styled.div`
  background: rgba(24, 162, 217, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 550px;
  padding: 30px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const SkillsH1 = styled.h1`
  font-size: 2.5rem;
  color: #f7f7f6;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: 40px;
  }
`;

export const SkillsH2 = styled.h2`
  color: #fff;
  font-size: 1.25rem;
  margin: 10px 0;
  text-decoration: underline;
`;

export const IconTextContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-content: center;
  padding: 10px;
`;
export const LineContainer = styled.div`
  display: flex;
  direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const TextContainer = styled.p`
  color: #fff;
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  padding-left: 10px;
`;
export const Img = styled.img`
  height: 40px;
  width: 40px;
`;
