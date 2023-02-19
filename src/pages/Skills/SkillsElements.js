import styled from "styled-components";

export const SkillsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "language backend tools"
    "frontend version tools";
  align-items: stretch;
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "language"
      "frontend"
      "backend"
      "version"
      "tools";
  }
`;

export const Language = styled.div`
  background-color: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  -webkit-backdrop-filter: blur(2px);
  grid-area: language;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const Frontend = styled(Language)`
  grid-area: frontend;
`;
export const Backend = styled(Language)`
  grid-area: backend;
`;

export const Version = styled(Language)`
  grid-area: version;
`;
export const Tools = styled(Language)`
  grid-area: tools;
`;

export const SkillsH2 = styled.h2`
  color: var(--color-text);
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
  color: var(--color-text);
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
