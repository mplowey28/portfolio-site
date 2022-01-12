import styled from "styled-components";

export const StarfieldCanvas = styled.canvas`
  background: red;
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1500ms ease-out;
`;
