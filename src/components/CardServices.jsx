import React from "react";
import { StyleCardServices, StyleCard } from "../styles/StyledCards";
import { FiTruck } from "react-icons/fi";
import Truck from "../assets/images/truck.svg";
import CentroMontagem from "../assets/images/centroMontagem.svg";
import House from "../assets/images/house.svg";

export default function CardServices({ active }) {
  return (
    <>
      {active && (
        <StyleCard>
            <StyleCardServices>
                <form>
                    <div className="service__title">
                    <div>
                        <FiTruck />
                    </div>
                    <h2>Escolha uma opção de entrega</h2>
                    </div>
                        <ul>
                        <li>
                                <div className="serviceBanner">
                                    <span>Entregamos e
                                        <br />
                                        Montamos seu pneu!
                                    </span>
                                </div>
                            <div className="cardservice__">
                                <img className="service__img" src={Truck} alt="truck" />
                                <span>Montagem móvel</span>
                            </div>
                            </li>
                            <li>
                                <div className="option">
                                    <div className="col-1">
                                        <p><strong>Agende sua entrega com a PneuStore Móvel</strong></p>
                                    </div>
                                    <div className="col-2">
                                        <input name="delivery" type="radio" />
                                        <div>
                                            <span>A partir de R$ 123,60</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul>
                        <li>
                                <div className="cardservice__">
                                    <img src={CentroMontagem} alt="Centro de Montagem" />
                                    <span>Entregar e montar em um Centro de Montagem</span>
                                </div>
                            </li>

                            <li>
                                <div className="option">
                                    <div className="col-1">
                                        <h4>De 5 a 8 dias úteis</h4>
                                        <p>Confira a disponibilidade dos serviços em cada centro de montagem</p>
                                    </div>
                                    <div className="col-2">
                                        <input name="delivery" type="radio" />
                                        <div>
                                            <span>FRETE GRÁTIS</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul>
                        <li>
                                <div className="cardservice__">
                                    <img src={House} alt="icon house"/>
                                    <span>Entregar no meu endereço</span>
                                </div>
                            </li>

                            <li>
                                <div className="option">
                                    <div className="col-1">
                                        <h4>De 5 a 8 dias úteis</h4>
                                    </div>
                                    <div className="col-2">
                                        <input name="delivery" type="radio" />
                                        <div>
                                            <span>A partir de R$ 123,60</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </form>
            </StyleCardServices>
        </StyleCard>
      )}
    </>
  );
}
