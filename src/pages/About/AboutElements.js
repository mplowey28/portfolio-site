import styled from "styled-components";

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
