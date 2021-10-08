import React from "react";
import { StyleCard, StyleCardProducts } from "../styles/StyledCards";
import { MdDelete } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
export default function CardProducts({ data }) {
  console.log(data);
  return (
    <StyleCard products>
      <div className="cardProducts__header">
        <div>
          <GiShoppingBag />
        </div>
        <h2>
          Produtos ({data && data.results.length > 0 ? data.results.length : 0})
        </h2>
      </div>
      {data &&
        data.results.map((product) => (
          <StyleCardProducts key={product.id}>
            <div className="cardsProducts">
              <div className="cardProducts__image">
                <img src={product.cover} alt={product.nomePneu} />
              </div>
              <div className="cardProducts__content">
                <div className="cardProducts__title">
                  <span>{product.nomePneu}</span>
                </div>
                <div className="cardProducts__company">
                  <div>{product.marca}</div>
                </div>
                <div className="cardProducts__price">{product.year}</div>
              </div>
            </div>

            <div className="cardProducts__actions">
              <div className="cardProducts__quanty">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div className="cardProducts__remove">
                <button>remover</button>
              </div>
            </div>
          </StyleCardProducts>
        ))}
      <div className="cardProducts__footer">
        <button>
          <MdDelete /> Remover todos os produtos
        </button>
      </div>
    </StyleCard>
  );
}
