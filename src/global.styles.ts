import styled, { createGlobalStyle } from 'styled-components';

export const Overall = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #b9d2f6;
    color: #2a2a2a;
    font-family: Nunito, Ubuntu, sans-serif;
    height: 100vh;
  }
`;

export const AppWrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;
