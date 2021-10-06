import React from "react";
import { StyleCards } from "../styles/StyledCards";
import CardCep from "./CardCep";
import Bounce from "react-reveal/Bounce";
import CardProducts from "./CardProducts";
import CardResume from "./CardResume";
import CardServices from "./CardServices";
import { HandleVisibility } from "../utils/helpers";

export default function Cards() {
  const { handleActive, active } = HandleVisibility();
  return (
    <StyleCards>
      <Bounce left>
        <div>
          <CardCep handleActive={handleActive} />
          <CardProducts />
          <Bounce left when={active}>
            <CardServices active={active} />
          </Bounce>
        </div>
        <div>
          <CardResume />
        </div>
      </Bounce>
    </StyleCards>
  );
}
