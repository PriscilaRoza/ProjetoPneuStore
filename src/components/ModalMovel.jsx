import React from "react";
import { HandleModalVisibility } from "../utils/helpers";
import { Calendar } from "./Calendar";
import caminhao from "../styles/img/caminhao.svg";
import * as S from "../styles/styledModal";
import Modal from "./Modal";
import ComboUm from '../styles/img/1.svg';
import ComboDois from '../styles/img/dois.svg';

export default function ModalMovel(props) {
  return (
    <Modal
      visible={props.visible}
      handleBackgroundClick={props.handleBackgroundClick}
    >
      <S.DivTitle>
        <S.Title>
          <button>
            <img
              src="https://www.pneustore.com.br/_ui/responsive/theme-pneustorePurple/images/icon-arrow-back.svg"
              alt="back"
            />
            Voltar
          </button>
          <img src={caminhao} alt="caminhão" />
          <h4>Instalação em Domicílio</h4>
        </S.Title>
        <S.Attention>
          <p>
            ⚠ O alinhamento deve ser feito em um local de piso firme e plano
            (garagem).
          </p>
        </S.Attention>
      </S.DivTitle>
      {/* parte dos serviços titulo */}
      <S.Services>
        <S.TitleServices>
          <p>1</p>
          <div className="passo1">
            <h4>Passo 1</h4>
            <h3>Selecione os serviços</h3>
          </div>
        </S.TitleServices>
        {/* parte dos serviços em si */}
        <S.ProductName>
          <h3>Nome e modelo do pneu</h3>
        </S.ProductName>

        <S.BodyServices>
          <div className="ServiceBox">
            <img src={ComboUm} alt="furadeira" />
            <div>
              <h3 className="ServiceName">Combo Básico 1 ou 2 Pneus</h3>
              <p className="ServiceName"> Montagem + balanceamento</p>
            </div>
          </div>
          <div className="Price">
            <h4>R$ 169,00</h4>
            <label className="Aplicar">
              Aplicar
              <input onClick={props.handleButtonClick} type="radio" />
            </label>
          </div>
        </S.BodyServices>

        <S.BodyServices>
          <div className="ServiceBox">
            <img src={ComboDois} alt="furadeira" />
            <div>
              <h3 className="ServiceName">Combo Básico 1 ou 2 Pneus</h3>
              <p className="ServiceName">
                Montagem + Balanceamento + Alinhamento dianteiro do veículo
              </p>
            </div>
          </div>
          <div className="Price">
            <h4>R$ 169,00</h4>
            <label className="Aplicar">
              Aplicar
              <input onClick={props.handleButtonClick} type="radio" />
            </label>
          </div>
        </S.BodyServices>
      </S.Services>

      <S.Services>
        <S.Window />
        <S.TitleServices>
          <p>2</p>
          <div className="passo1">
            <h4>Passo 2</h4>
            <h3>Agende a data</h3>
          </div>
        </S.TitleServices>
      </S.Services>
      <S.Date>
        <div>
          <h4>Selecione o dia da entrega/serviço</h4>
          <div className="Calendar">
            <Calendar />
          </div>
        </div>
        {/* <S.Divisor /> */}
        <div>
          <S.Hours>
            <h4>Escolha o período de preferência</h4>
            <div>
              <button>08h - 11h PERÍODO DA MANHÃ</button>
              <button>14h - 17h PERÍODO DA TARDE</button>
            </div>
            <div className="finalizacao">
              <h3>Confira sua escolha</h3>
              <h3>Total em serviços: R$ 0,00</h3>
              <p>Valor do Frete: R$ 29,90</p>
              <label>
                <input type="checkbox" />
                 Autorizo entrarem em contato comigo 24 horas antes da data de
                entrega.
              </label>
            </div>
          </S.Hours>
        </div>
      </S.Date>
      <S.Buttons>
        <button>CANCELAR</button>
        <button>CONFIRMAR</button>
      </S.Buttons>
    </Modal>
  );
}
