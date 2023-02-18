import React from "react";
import { SectionWrapper } from "./SectionWrapper";

export default SectionWrapper = ({ children, percentHeight, lastChild }) => {
  return (
    <SectionWrapper lastChild={lastChild} percentHeight={percentHeight}>
      {children}
    </SectionWrapper>
  );
};
