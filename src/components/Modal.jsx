import React from "react";
import * as M from "../styles/styledModal";

function Modal(props) {
  return (
    <>
      {props.visible === true && (
        <M.ModalBackground onClick={props.handleBackgroundClick}>
          <M.ModalArea>{props.children}</M.ModalArea>
        </M.ModalBackground>
      )}
    </>
  );
}

export default Modal;
