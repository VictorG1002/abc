import styled from 'styled-components';

export const HomeContainer = styled.div`
display: flex;
justify-content: center;
height: 100vh;
width: auto;


& div {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
}
`;
