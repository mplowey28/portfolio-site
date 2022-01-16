import styled from "styled-components";

export const InfoContainer = styled.div`
  color: var(--color-text);
  background: var(--color-background);
  overflow: hidden;
  padding: 200px 30px;
`;

export const InfoWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  -webkit-backdrop-filter: blur(2px);
  height: auto;
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  padding: 30px;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  color: #f7f7f6;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: 40px;
  }
`;

export const SubTitle = styled.p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  color: var(--color-text);

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 0 10px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 300px;
  margin: auto;
  height: 100%;
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 100%;
`;
