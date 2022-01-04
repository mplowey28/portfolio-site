import styled from "styled-components";

export const ExperienceContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-background);
  padding: 80px 0;
`;

export const ExperienceWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ExperienceCard = styled.div`
  background: #f7f7f6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ExperienceH1 = styled.h1`
  font-size: 2.5rem;
  color: #f7f7f6;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ExperienceH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const ExperienceP = styled.p`
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
