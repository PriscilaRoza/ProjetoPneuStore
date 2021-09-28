import React from "react";
import { StyledCard } from "../styles/StyledCards";
import CardCep from "./CardCep";
import Bounce from "react-reveal/Bounce";

export default function Cards() {
  return (
    <StyledCard>
      <Bounce left>
        <CardCep />
        <div>DIV2</div>
      </Bounce>
    </StyledCard>
  );
}
