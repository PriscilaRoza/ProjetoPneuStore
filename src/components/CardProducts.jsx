import React from "react";
import { StyleCard, StyleCardProducts } from "../styles/StyledCards";
import { MdDelete } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
export default function CardProducts() {
  return (
    <StyleCard products>
      <div className="cardProducts__header">
        <div>
          <GiShoppingBag />
        </div>
        <h2>Produtos</h2>
      </div>
      <StyleCardProducts>
        <a href="https://www.pneustore.com.br/categorias/pneus-de-carro/alta-performance/produto/pneu-hankook-aro-17-ventus-v12-evo-2-k120-205-45r17-88w-xl-10010695">
          <div className="cardProducts__image">
            <img
              src="https://static.pneustore.com.br/medias/sys_master/images/images/h04/h8d/8859199471646/pneu-hankook-aro-17-ventus-v12-evo-2-k120-205-45r17-88w-1.jpg"
              alt="PNEU HANKOOK ARO 17 VENTUS V12 EVO 2 K120 205/45R17 88W XL"
            />
          </div>
          <div className="cardProducts__content">
            <div className="cardProducts__title">
              <span>
                PNEU HANKOOK ARO 17 VENTUS V12 EVO 2 K120 205/45R17 88W XL
              </span>
            </div>
            <div className="cardProducts__company">
              <img
                src="https://www.pneustore.com.br/medias/sys_master/images/images/h8a/h8b/9021183164446/mini-banner-pneustore-hankook.svg"
                alt="HANKOOK"
              />
            </div>
            <div className="cardProducts__price">R$&nbsp;553,09</div>
          </div>
        </a>

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

      <StyleCardProducts>
        <a href="https://www.pneustore.com.br/categorias/pneus-de-carro/alta-performance/produto/pneu-hankook-aro-17-ventus-v12-evo-2-k120-205-45r17-88w-xl-10010695">
          <div className="cardProducts__image">
            <img
              src="https://static.pneustore.com.br/medias/sys_master/images/images/h04/h8d/8859199471646/pneu-hankook-aro-17-ventus-v12-evo-2-k120-205-45r17-88w-1.jpg"
              alt="PNEU HANKOOK ARO 17 VENTUS V12 EVO 2 K120 205/45R17 88W XL"
            />
          </div>
          <div className="cardProducts__content">
            <div className="cardProducts__title">
              <span>
                PNEU HANKOOK ARO 17 VENTUS V12 EVO 2 K120 205/45R17 88W XL
              </span>
            </div>
            <div className="cardProducts__company">
              <img
                src="https://www.pneustore.com.br/medias/sys_master/images/images/h8a/h8b/9021183164446/mini-banner-pneustore-hankook.svg"
                alt="HANKOOK"
              />
            </div>
            <div className="cardProducts__price">R$&nbsp;553,09</div>
          </div>
        </a>

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
      <div className="cardProducts__footer">
        <button>
          <MdDelete /> Remover todos os produtos
        </button>
      </div>
    </StyleCard>
  );
}
