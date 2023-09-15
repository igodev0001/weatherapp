import styled, { createGlobalStyle } from 'styled-components';

export const Overall = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
  }

  body {
    color: #2a2a2a;
    font-family: Nunito, Ubuntu, sans-serif;
    height: 100vh;
    overflow: hidden;
  }
`;

export const AppWrapper = styled.main`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100vh;
  justify-content: center;
  transition: 0.8s background-color;
  width: 100%;
`;
