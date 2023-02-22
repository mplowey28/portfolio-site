import styled from "styled-components";

export const CardComponent = styled.div`
  flex: ${({ flexValue }) => flexValue && "1"};
  background-color: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  -webkit-backdrop-filter: blur(2px);
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "row" ? "row" : "column"};
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 1rem;
  z-index: 10;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 875px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
