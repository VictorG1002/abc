import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 10px;
  border-radius: 6px;
  border: none;
  background-color: #2B6CB0;
  font-size: 14px;
  color: white;
  font-family: "Poppins";
  cursor: pointer;

  &:hover {
    background-color: #2C5282;
    transform: scale(1.05);
  }
  &:active {
    background-color: #1A365D;
  }
`;
