import React from "react";
import { StyleCard, StyleCardProducts } from "../styles/StyledCards";
import { MdDelete } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import useGetApi from "../hooks/useGetApi";
import { api } from "../services/api";
export default function CardProducts() {
  const { data } = useGetApi(api.readAllGames());
  console.log(data);

  return (
    <StyleCard products>
      <div className="cardProducts__header">
        <div>
          <GiShoppingBag />
        </div>
        <h2>Produtos ({data && data.length > 0 ? data.length : 0})</h2>
      </div>
      {data &&
        data.map((product) => (
          <StyleCardProducts key={product.id}>
            <div className="cardsProducts">
              <div className="cardProducts__image">
                <img src={product.cover} alt={product.title} />
              </div>
              <div className="cardProducts__content">
                <div className="cardProducts__title">
                  <span>{product.title}</span>
                </div>
                <div className="cardProducts__company">
                  {product.genrers &&
                    product.genrers.map((genrer) => (
                      <div key={genrer.id}>{genrer.name}</div>
                    ))}
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
