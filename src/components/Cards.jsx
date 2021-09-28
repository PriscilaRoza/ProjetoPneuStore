import React from "react";
import { StyleCards } from "../styles/StyledCards";
import CardCep from "./CardCep";
import Bounce from "react-reveal/Bounce";
import CardProducts from "./CardProducts";

export default function Cards() {
  return (
    <StyleCards>
      <Bounce left>
        <div>
          <CardCep />
          <CardProducts />
        </div>
        <div>Resumo da compra</div>
      </Bounce>
    </StyleCards>
  );
}
