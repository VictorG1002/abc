import styled from "styled-components";

export const SelectStyled = styled.select`
  width: 100%;
  padding: 5px 10px 10px 0;
  font-size: 17px;
  border: 1px solid "#ccc";
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 6px 0 10px 0;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);

    option {
      border: none;
      border: 1px solid "#ccc";
      padding: 10px 0;
      background: #eeeeee;
      font-size: 16px;
    }

    &:disabled {
      opacity: 0.5;
      cursor: default;

      &:hover {
        border-bottom: 1px solid #ccc !important;
      }
    }
  }
`;
