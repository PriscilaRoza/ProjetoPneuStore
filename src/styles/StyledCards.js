import styled from "styled-components";

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
`;

const StyledCardCep = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  border-top: 2px solid var(--primary-color);
  border-bottom: 2px solid var(--primary-color);

  & .cardCep__title {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    & img {
      margin-right: 0.5rem;
      width: 32px;
    }

    & h2 {
      font-size: 1.1rem;
      font-weight: 900;
    }
  }

  & .cardCep__search {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    & input {
      margin-right: 0.5rem;
      padding: 0.375rem 0.4rem;
      line-height: 1.33;
      font-weight: 600;
      color: #333;
      border: 1px solid #c0c0c0;
      text-align: left;
      border-radius: 0.45rem;
    }

    & button {
      padding: 0.375rem 1rem;
      background-color: transparent;
      border: 1px solid var(--primary-color);
      border-radius: 0.45rem;
      color: var(--primary-color) !important;
      text-transform: uppercase;
      transition: 0.3s;
    }
  }

  & .cardCep__link {
    & a {
      color: var(--primary-color);
      text-decoration: underline;
    }
  }
`;

export { StyledCard, StyledCardCep };
