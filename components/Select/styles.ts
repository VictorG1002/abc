import styled from "styled-components";

export const SelectStyled = styled.select`
  select {
    width: 100%;
    border: 0;
    padding: 10px 10px 10px 0;
    font-size: 17px;
    border-bottom: 2px solid "#ccc";
    background-color: transparent;
    cursor: pointer;

    // TABLET
    @media screen and (min-width: 768px) {
      padding: 6px 0 10px 0;
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }

    option {
      border: none;
      padding: 10px 0;
      background: #eeeeee;
      font-size: 16px;
    }

    &:disabled {
      opacity: 0.5;
      cursor: default;

      &:hover {
        border-bottom: 2px solid #ccc;
      }
    }
  }
`;


