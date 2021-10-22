import styled, { css } from "styled-components";

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

  ${(props) =>
    props.position &&
    css`
      position: sticky;
      top: 12vh;
    `}

  ${(props) =>
    props.products &&
    css`
      .cardProducts__header {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        svg {
          color: var(--primary-color);
          margin-right: 0.5rem;
          width: 32px;
          height: 43px;
        }

        h2 {
          font-size: 1.1rem;
          font-weight: 900;
          text-transform: uppercase;
        }
      }

      .cardProducts__footer {
        display: flex;
        justify-content: flex-end;
        margin-top: 1rem;
        button {
          display: flex;
          align-items: center;
          padding: 0.375rem 1rem;
          background-color: transparent;
          border: 1px solid #ff0000;
          text-transform: uppercase;
          font-size: 0.8rem;
          border-radius: 0.4rem;
          color: #ff0000;
          font-weight: 900;
          cursor: pointer;

          svg {
            margin-right: 0.5rem;
          }
        }
      }
    `}
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
      text-transform: uppercase;
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
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--primary-color);

  .cardsProducts {
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

const StyleCardResume = styled.div`
  display: flex;
  flex-direction: column;

  .cardResume__title {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    svg {
      color: var(--primary-color);
      margin-right: 0.5rem;
      width: 32px;
      height: 43px;
    }
    h2 {
      font-size: 1.1rem;
      font-weight: 900;
      text-transform: uppercase;
    }
  }

  .cardResume__prices {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.3rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #595959;

    .prices__text {
      color: #595959;
    }
    .prices__value {
      font-weight: bold;
    }
  }

  .cardResume__freight {
    display: flex;
    justify-content: space-between;

    .prices__text {
      color: #595959;
    }
    .prices__value {
      font-weight: bold;
    }
  }

  .cardResume__priceAll {
    display: flex;
    flex-direction: column;
    background-color: #f1f1f1;
    padding: 0.5rem;
    margin-top: 1rem;

    .price {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;

      .prices__text {
        color: #595959;
      }
      .prices__value {
        font-weight: bold;
        font-size: 2rem;
        color: var(--primary-color);
      }
    }

    .discount {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;
    }
  }

  .cardResume__actions {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    a,
    .action__continue {
      display: flex;
      margin-bottom: 0.5rem;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      padding: 1rem 0;
      border-radius: 0.3rem;
      text-transform: uppercase;
      cursor: pointer;
    }

    a {
      background-color: var(--secondary-color);
      border: none;
      color: var(--primary-color);
      font-weight: 600;
    }

    a:hover {
      filter: brightness(0.9);
    }

    .action__buy {
      background-color: transparent;
      border: none;
      color: var(--primary-color);
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
    }
    .action__continue {
      background-color: transparent;
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
    }
  }
`;

const StyleCardServices = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  .service__title {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  img {
    color: var(--primary-color);
    margin-right: 0.5rem;
    width: 32px;
    height: 43px;
  }
  span {
    font-weight: bold;
  }
  ul {
    border-left: 3px solid var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 15px;
  }
  .cardservice__ {
    display: flex;
    background-color: #f1f1f1;
    height: 50px;
    align-items: center;
    img {
      margin-left: 10px;
    }
  }
  input {
  }
  .serviceBanner {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    height: 90px;
    padding: 1rem;
    font-size: 1.25rem;
    font-style: italic;
    font-weight: 800;
    line-height: 1.1;
    color: #fff;
    background-repeat: no-repeat;
    background-position: top left, top right;
    background-image: linear-gradient(
        90deg,
        #4e008e 40%,
        rgba(138, 172, 3, 0) 80%
      ),
      url("https://www.pneustore.com.br/_ui/responsive/theme-pneustorePurple/images/delivery-header.png");
  }
  .option {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 10px;
  }
  .col-1 {
    flex-basis: 60%;
    align-items: center;
    display: grid;
    place-items: center;
  }

  .col-2 {
    flex-basis: 40%;
    display: grid;
    place-items: center;
    margin-top: 1rem;
    padding: 1rem;

    input {
      width: 20px;
      height: 20px;
      outline: none;
      margin-top: -20px;
      margin-bottom: 20px;
    }
  }
`;

export {
  StyleCards,
  StyleCard,
  StyleCardCep,
  StyleCardProducts,
  StyleCardResume,
  StyleCardServices,
};
