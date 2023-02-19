import styled from "styled-components";

export const InfoWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  -webkit-backdrop-filter: blur(2px);
  z-index: 3;
  max-width: 1200px;
  display: flex;
  direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 1rem;

  @media screen and (max-width: 875px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const TextWrapper = styled.div`
  background: transparent;
  z-index: 3;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SubTitle = styled.p`
  color: var(--color-text);
  font-size: 24px;
  padding: 24px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ImgWrap = styled.div`
  height: 340px;
  width: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  border-radius: 50%;
  height: 340px;
  width: 340px;
`;
