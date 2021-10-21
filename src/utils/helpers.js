import { useState } from "react";
import { apiViaCep } from "../services/apiViaCep";

function HandleVisibility() {
  const [active, setActive] = useState(false);
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState([]);
  const addressValid = () => Boolean(window.localStorage.getItem("address"));

  const onChange = (event) => {
    const { value } = event.target;
    setCep(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (cep) {
      apiViaCep
        .buildApiGetRequest(apiViaCep.readCep(cep))
        .then((response) => response.json())
        .then((response) => {
          setAddress(response);
          window.localStorage.setItem("address", JSON.stringify(response));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setActive(true));
    } else {
      alert("Você precisa preencher o cep");
    }
  };

  return { address, onChange, cep, onSubmit, active, addressValid };
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
