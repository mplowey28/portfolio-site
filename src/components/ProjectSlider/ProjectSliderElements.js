import styled from 'styled-components'

export const SliderContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  padding: 50px 30px;
`

export const ProjectCardsWrapper = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectCard = styled.div`
  color: var(--color-text);
  background-color: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  -webkit-backdrop-filter: blur(2px);
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
`

export const ProjectTitle = styled.h2`
  color: var(--color-text);
  font-size: 1.25rem;
  margin: 10px 0;
  text-decoration: underline;
`

export const ProjectImgLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

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
`

export const ProjectDescription = styled.div`
  padding: 2rem;
  text-align: justify;
`

export const LinkContainer = styled.div`
  max-width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`

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
    background: ${({ primary }) => (primary ? '#bebab4' : '#f7f7f6')};
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
`
