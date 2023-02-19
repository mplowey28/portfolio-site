import styled from "styled-components";

export const StarfieldCanvas = styled.div`
  background: hsl(223, 39%, 12%);
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Gradient = styled(StarfieldCanvas)`
  background: linear-gradient(180deg, #b6eaff, #94dfff);
`;
