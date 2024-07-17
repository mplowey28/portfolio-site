import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  max-width: 1200px;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProjectTitle = styled.h2`
  color: var(--color-text);
  font-size: 1.25rem;
  margin: 10px 0;
  text-decoration: underline;
`;

export const ProjectImgLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-bottom: 24px;

  img {
    height: 200px;
    object-fit: scale-down;
    @media screen and (max-width: 480px) {
      height: 100px;
    }
  }

  video {
    height: 200px;
    object-fit: scale-down;
    @media screen and (max-width: 480px) {
      height: 100px;
    }
  }
`;

export const LinkContainer = styled.div`
  max-width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

export const LiveDemoContainer = styled.a`
  background: var(--color-text);
  margin-top: 16px;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #020104;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 0 5px #787878;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 16px;
  height: 30px;
  width: 100px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#bebab4" : "#f7f7f6")};
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
