import React from "react";
import { StyleCards } from "../styles/StyledCards";
import CardCep from "./CardCep";
import Bounce from "react-reveal/Bounce";
import CardProducts from "./CardProducts";
import CardResume from "./CardResume";
import CardServices from "./CardServices";
import { api } from "../services/apiBase";
import useGetApi from "../hooks/useGetApi";
import { HandleVisibility, HandleModalVisibility } from "../utils/helpers";
import ModalMovel from "./ModalMovel";

export default function Cards() {
  const { handleButtonClick, modalVisible, handleBackgroundClick } =
    HandleModalVisibility();

  const { data } = useGetApi(api.readAll());
  const { address, onChange, cep, onSubmit, active } = HandleVisibility();

  return (
    <StyleCards>
      <Bounce left>
        <div>
          <CardCep onSubmit={onSubmit} onChange={onChange} cep={cep} />
          <CardProducts data={data} />

          <Bounce left when={active}>
            <CardServices
              active={active}
              address={address}
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
