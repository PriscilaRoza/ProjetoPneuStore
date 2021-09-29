import React from "react";
import localizationIcon from "../assets/images/localization-icon.svg";
import { StyleCardCep, StyleCard } from "../styles/StyledCards";
export default function CardCep() {
  return (
    <StyleCard>
      <StyleCardCep>
        <div className="cardCep__title">
          <img src={localizationIcon} alt="icone de localização" />
          <h2>Informe o seu CEP</h2>
        </div>

        <div className="cardCep__search">
          <input type="search" autocomplete="off" placeholder="Inserir CEP" />
          <button>Calcular</button>
        </div>

        <div className="cardCep__link">
          <a href="#123">Não sei meu CEP</a>
        </div>
      </StyleCardCep>
    </StyleCard>
  );
}
