import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

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
  gap: 0.75rem;
  height: 100vh;
  justify-content: center;
  transition: 0.8s background-color;
  width: 100%;

  &::after {
    background-color: ${({ theme }) => theme.colors.background};
    content: '';
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    transition: 0.8s background-color;
    width: 100%;
    z-index: 0;
  }
`;

export const WaterMark = styled(motion.p)`
  color: #9a9a9a80;
  left: 50%;
  position: absolute;
  text-align: center;
  top: 90%;
  transform: translate(-50%, -20%);
  z-index: 10;
`;
