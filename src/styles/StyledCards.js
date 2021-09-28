import styled from "styled-components";

const StyleCards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  background-color: #f1f1f1;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem 5rem;
  }
`;

const StyleCard = styled.div`
  margin-top: 1rem;
  padding: 1.5rem;
  border-top: 2px solid var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
  background-color: #ffffff;

  @media (min-width: 1024px) {
    border: none;
  }
`;

const StyleCardCep = styled.div`
  display: flex;
  flex-direction: column;

  .cardCep__title {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    img {
      margin-right: 0.5rem;
      width: 32px;
    }

    h2 {
      font-size: 1.1rem;
      font-weight: 900;
    }
  }

  .cardCep__search {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    input {
      margin-right: 0.5rem;
      padding: 0.375rem 0.4rem;
      line-height: 1.33;
      font-weight: 600;
      color: #333;
      border: 1px solid #c0c0c0;
      text-align: left;
      border-radius: 0.45rem;
    }

    button {
      padding: 0.375rem 1rem;
      background-color: transparent;
      border: 1px solid var(--primary-color);
      border-radius: 0.45rem;
      color: var(--primary-color) !important;
      text-transform: uppercase;
      transition: 0.3s;
      cursor: pointer;

      :hover {
        background-color: var(--secondary-color);
      }
    }
  }

  .cardCep__link {
    a {
      color: var(--primary-color);
      text-decoration: underline;
    }
  }
`;

const StyleCardProducts = styled.div`
  display: flex;
  flex-direction: column;

  a {
    display: flex;

    .cardProducts__image {
      display: flex;
      align-items: center;

      img {
        width: 70px;
        height: 70px;
      }
    }

    .cardProducts__content {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;

      .cardProducts__title {
        font-size: 1rem;
        line-height: 1.3rem;
        font-weight: 700;
        color: #333;
        margin-bottom: 2px;
      }

      .cardProducts__company {
        margin-bottom: 2px;
      }

      .cardProducts__price {
        font-weight: 900;
        align-items: center;
        color: var(--primary-color);
        font-size: 1.3rem !important;
      }
    }
  }

  .cardProducts__actions {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    .cardProducts__quanty {
      display: flex;
      align-items: center;

      button {
        padding: 0.3rem 0.5rem;
        display: flex;
        background-color: transparent;
        border: 1px solid var(--primary-color);
        border-radius: 0.3rem;
        color: var(--primary-color) !important;
        align-items: center;
        cursor: pointer;

        :hover {
          background-color: var(--secondary-color);
        }
      }

      span {
        padding: 0 0.4rem;
      }
    }

    .cardProducts__remove {
      button {
        padding: 0.375rem 1rem;
        background-color: transparent;
        border: 1px solid var(--primary-color);
        border-radius: 0.45rem;
        color: var(--primary-color) !important;
        text-transform: uppercase;
        -webkit-transition: 0.3s;
        transition: 0.3s;
        cursor: pointer;

        :hover {
          background-color: var(--secondary-color);
        }
      }
    }
  }
`;

export { StyleCards, StyleCard, StyleCardCep, StyleCardProducts };
