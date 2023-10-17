import styled from "styled-components";

export const LoginContainer = styled.main`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  img {
    height: 100vh;
  }

  form {
    flex: 1;
    max-width: 26rem;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;
