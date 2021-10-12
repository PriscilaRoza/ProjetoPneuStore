import React from "react";
import { StyleCards } from "../styles/StyledCards";
import CardCep from "./CardCep";
import Bounce from "react-reveal/Bounce";
import CardProducts from "./CardProducts";
import CardResume from "./CardResume";
import CardServices from "./CardServices";
import { HandleVisibility, HandleModalVisibility } from "../utils/helpers";
import Modal from "./Modal";
import ModalMovel from "./ModalMovel";

export default function Cards() {
  const { handleButtonClick, modalVisible, handleBackgroundClick } =
    HandleModalVisibility();
  const { handleActive, active } = HandleVisibility();
  return (
    <StyleCards>
      <Bounce left>
        <div>
          <CardCep handleActive={handleActive} />
          <CardProducts />
          <Bounce left when={active}>
            <CardServices
              active={active}
              handleButtonClick={handleButtonClick}
              modalVisible={modalVisible}
              handleBackgroundClick={handleBackgroundClick}
            />
          </Bounce>
        </div>
        <div>
          <CardResume />
        </div>
        <ModalMovel
          visible={modalVisible}
          handleBackgroundClick={handleBackgroundClick}
        />
      </Bounce>
    </StyleCards>
  );
}
