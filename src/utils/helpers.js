import { useState } from "react";
import { apiViaCep } from "../services/apiViaCep";

function HandleVisibility() {
  const [active, setActive] = useState(false);
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState([]);

  const onChange = (event) => {
    const { value } = event.target;
    setCep(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    apiViaCep
      .buildApiGetRequest(apiViaCep.readCep(cep))
      .then((response) => response.json())
      .then((response) => {
        setAddress(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setActive(true));
  };

  return { address, onChange, cep, onSubmit, active };
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
