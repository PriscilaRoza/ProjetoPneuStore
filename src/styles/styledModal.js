import styled from "styled-components";

export const ModalBackground = styled.div`
  height: 100%;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalArea = styled.div`
  top: 0;
  margin-top: 0;
  margin: 10px 50px;
  padding: 20px;
  width: 70%;
  border-radius: 10px;
  background-color: #fff;
  padding: 50;
  align-items: center;
  @media (max-width: 768px) {
    margin: 0;
    width: 100vh;
  }
`;
// Modal móvel

export const Window = styled.div`
  padding: 15px;
  background-color: white;
`;
export const DivTitle = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Title = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  display: flex;
  border-radius: 10px 10px 0 0;
  /* -webkit-box-shadow: -2px 7px 26px -13px rgba(0, 0, 0, 0.86);
  box-shadow: -2px 7px 26px -13px rgba(0, 0, 0, 0.86); */
  align-items: center;
  color: #4e008e;
  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    color: #4e008e;
    font-size: 20px;
    margin-left: -15px;
    margin-right: 30px;
    display: none;
  }
  img {
    margin: 10px;
  }
  @media (max-width: 768px) {
    button {
      display: block;
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      color: #4e008e;
      font-size: 20px;
      margin-left: -15px;
      margin-right: 30px;
      cursor: pointer;
    }
    align-items: center;
    justify-content: center;
  }
`;
export const Attention = styled.div`
  align-items: center;
  p {
    background-color: #f5fa82;
    padding: 0.1rem 1rem;
  }
  @media (min-width: 1023px) {
    p {
      position: relative;
      top: 0px;
      margin-left: 50px;
    }
  }
  @media (max-width: 768px) {
    p {
      @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
        display: block;
      }
    }
  }
`;

export const Services = styled.div`
  background-color: #f1f1f1;
`;
export const TitleServices = styled.div`
  display: flex;

  h3 {
    color: #4e008e;
  }
  p {
    margin-left: 20px;
  }
  h4 {
    margin-bottom: -20px;
    color: gray;
  }
  .passo1 {
    flex-direction: column;
    align-items: center;
    margin-top: -5px;
    margin-left: 20px;
  }
  p {
    width: 2rem;
    height: 2rem;
    text-align: center;
    font-size: 1.375rem;
    line-height: 1.5;
    font-weight: 800;
    border-radius: 50%;
    color: #fff;
    background-color: #4e008e;
  }
`;
export const ProductName = styled.div`
  background-color: white;
  border: 1px solid gray;
  border-left: 4px solid #4e008e;
  h3 {
    margin-left: 10px;
    color: gray;
  }
`;
export const BodyServices = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* display: flex; */
  /* flex-direction: row; */
  border: 1px solid gray;
  align-items: center;
  /* justify-content: center; */
  /* justify-content: space-around; */

  /* justify-content: center; */
  .ServiceBox {
    display: flex;
  }
  background-color: #f1f1f1;
  div {
    padding-left: 10px;
  }

  label {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .Aplicar {
    margin-left: 30px;
  }
  input {
    width: 30px;
    height: 30px;
    margin: 25px 10px;
  }
  /* desktop */
  .Price {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* padding-right: 0.5rem; */
    height: 100%;
  }

  img {
    display: flex;
    margin-left: 20px;
    position: relative;
  }
  @media (min-width: 1024px) {
    min-height: 100px;
    max-width: 100%;

    .Aplicar {
      font-weight: 700;
      width: 100px;
      background-color: #68dcfa;
    }
    input {
      margin-top: 10px;
    }
  }
  @media (max-width: 768px) {
    min-height: 180px;
    height: auto;
    display: flex;
    border: 1px solid gray;
    .ServiceName {
      font-size: 16px;
      max-width: 120px;
      margin-top: 0;
      margin-bottom: 0;
    }
    /* mobile */
    .Price {
      display: flex;
      margin-left: 2px;
      min-width: 100px;
      align-items: center;
      height: 100%;
    }
  }
  label {
    margin-right: 10px;
  }
`;
// export const Divisor = styled.div`
//   height: 500px; /*Altura da linha*/
//   border-left: 1px solid; /* Adiciona borda esquerda na div como ser fosse uma linha.*/
//   margin-left: 130px;
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;
export const Date = styled.div`
  border-left: 1px solid gray;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid gray;

  div {
    justify-content: space-around;
  }
  h4 {
    justify-content: center;
    margin-left: 80px;
  }
  @media (max-width: 768px) {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Hours = styled.div`
  width: 450px;
  height: 500px;
  top: 0;
  border-left: 1px solid gray;
  align-items: center;
  justify-content: center;
  .finalizacao{
    margin-left: 40px;
    margin-top: 10px;
    line-height: 30px;
  } button {
    /* margin-left: 20px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid gray;
    background-color: transparent;
    width: 400px;
    height: 60px;
    margin-left: 30px;
    div h3 {
      margin-left: 30px;
    }
  }
  button:hover {
    background-color: #68dcfa;
  }
  @media (max-width: 768px) {
    height: 200px;
    button {
      width: 300px;
      margin-left: 70px;
    }
  }
`;

export const Buttons = styled.div`
  padding-top: 1rem;
  /* margin-top: 10px; */
  display: flex;
  justify-content: flex-end;
  button {
    border-width: 0;
    border-style: solid;
    border-color: #e2e8f0;
    width: 190px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid gray;
    margin-right: 10px;
  }
  button:hover {
    background-color: #68dcfa;
  }
`;
