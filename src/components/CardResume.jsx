import React from "react";
import { StyleCard, StyleCardResume } from "../styles/StyledCards";
import { RiFileSearchFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function CardResume() {
  return (
    <StyleCard position>
      <StyleCardResume>
        <div className="cardResume__title">
          <RiFileSearchFill />
          <h2>Resumo</h2>
        </div>

        <div className="cardResume__prices">
          <span className="prices__text">Valor dos produtos:</span>
          <span className="prices__value">R$&nbsp;404,15</span>
        </div>

        <div className="cardResume__freight">
          <span className="prices__text">Frete:</span>
          <span className="prices__value">R$&nbsp;0,00</span>
        </div>

        <div className="cardResume__priceAll">
          <div className="price">
            <span className="prices__text">Total:</span>
            <span className="prices__value">R$&nbsp;404,15</span>
          </div>

          <div className="discount">
            <p>
              ou <b>R$ 363,74 à vista</b> no <b>cartão de</b>
            </p>
            <b>débito ou via PIX</b>
          </div>
        </div>
        <div className="cardResume__actions">
          <button className="action__buy">
            <NavLink to="/login">Ir para o pagamento</NavLink>
          </button>

          <button className="action__continue">Continuar comprando</button>
        </div>
      </StyleCardResume>
    </StyleCard>
  );
}
