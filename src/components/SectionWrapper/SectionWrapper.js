import styled from "styled-components";

export const SectionWrapper = styled.section`
  height: ${({ percentHeight }) => (percentHeight ? "100%" : "100vh")};
  display: flex;
  padding: 10rem 24px;
  padding-top: 10rem;
  padding-right: 24px;
  padding-left: 24px;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding-bottom: ${({ lastChild }) => (lastChild ? "25rem" : "0")};

  @media screen and (max-width: 480px) {
    padding-top: 5rem;
  }
`;
