import React from "react";
import localizationIcon from "../assets/images/localization-icon.svg";
import { StyleCardCep, StyleCard } from "../styles/StyledCards";

export default function CardCep({ onChange, onSubmit }) {
  return (
    <StyleCard>
      <StyleCardCep>
        <div className="cardCep__title">
          <img src={localizationIcon} alt="icone de localização" />
          <h2>Informe o seu CEP</h2>
        </div>
        <form onSubmit={onSubmit}>
          <div className="cardCep__search">
            <input
              type="search"
              autoComplete="off"
              placeholder="Inserir CEP"
              onChange={onChange}
            />
            <a href="#cardServices">
              <button type="submit">Calcular</button>
            </a>
          </div>
        </form>

        <div className="cardCep__link">
          <a href="#123">Não sei meu CEP</a>
        </div>
      </StyleCardCep>
    </StyleCard>
  );
}
