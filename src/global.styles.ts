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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100vh;
  justify-content: center;
  transition: 0.8s background-color;
  width: 100%;

  &::after {
    background-color: #d9d9d9;
    content: '';
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 0;
  }
`;
