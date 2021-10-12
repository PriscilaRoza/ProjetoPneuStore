import { useState } from "react";

function HandleVisibility() {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return { handleActive, active };
}

function HandleModalVisibility() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleButtonClick = () => {
    setModalVisible(true);
  };
  const handleBackgroundClick = () => {
    setModalVisible(false);
  };
  return {
    modalVisible,
    setModalVisible,
    handleBackgroundClick,
    handleButtonClick,
  };
}
export { HandleVisibility, HandleModalVisibility };
