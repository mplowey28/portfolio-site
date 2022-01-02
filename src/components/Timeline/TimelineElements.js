import styled from "styled-components";

export const TimelineContainer = styled.div`
  background: var(--color-background);
`;

export const TimelineHeader = styled.div`
  background: var(--color-background);
  height: 200px;
  color: #f7f7f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimelineH1 = styled.h1`
  padding-top: 40px;
  font-size: 2.5rem;
  color: #f7f7f6;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #020104;
`;

export const Gif = styled.img`
  width: 25%;
  height: 25%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #020104;
`;

export const Pic = styled.img`
  width: 50%;
  height: 50%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #020104;
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
