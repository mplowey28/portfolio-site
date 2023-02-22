import React from "react";
import { CardComponent } from "./CardElements";

const Card = ({ children, direction, flexValue }) => {
  return (
    <CardComponent direction={direction} flexValue={flexValue}>
      {children}
    </CardComponent>
  );
};

export default Card;
