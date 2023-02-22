import styled from "styled-components";

export const ExperienceWrapper = styled.div`
  max-width: 1200px;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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
  -o-object-fit: contain;
  object-fit: contain;
  background: white;
  margin-bottom: 20px;
`;
