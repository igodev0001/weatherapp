import styled, { createGlobalStyle } from 'styled-components';

export const Overall = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
  }
`;

export const AppWrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;
