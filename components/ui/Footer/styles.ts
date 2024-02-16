import styled from "styled-components";

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 40px;
  background-color: #63b3ed;
  box-shadow: 10px 10px 88px 0px rgba(0, 0, 0, 0.2);

  & div {
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-family: "Poppins";
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 36px;
    justify-content: center;
    align-items: center;
  }
`;
