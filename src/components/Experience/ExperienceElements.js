import styled from "styled-components";

export const ExperienceContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-background);
  padding: 80px 30px;
`;

export const ExperienceWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr;
  align-items: center;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ExperienceCard = styled.div`
  background-color: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  -webkit-backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  margin-bottom: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ExperienceH1 = styled.h1`
  font-size: 2.5rem;
  color: var(--color-highlight);
  margin-bottom: 20px;
`;

export const ExperienceH2 = styled.h2`
  color: var(--color-text);
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const ExperienceP = styled.p`
  color: var(--color-text);
  font-size: 1rem;
  text-align: center;
`;

export const ExperienceImg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: white;
  margin-bottom: 20px;
`;
