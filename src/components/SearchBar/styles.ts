import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.form)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secundary};
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  transition: 0.8s background-color;
  width: 20rem;
  z-index: 10;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    transition: 0.8s background-color;
  }
`;

export const Input = styled.input`
  background: none;
  border: none;
  color: #131313;
  font-family: Nunito, Ubuntu, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  height: 2.5rem;
  outline: none;
  padding: 0.75rem;
  width: 90%;
`;

export const Button = styled(motion.button)`
  align-items: center;
  background: none;
  border: none;
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: center;
  outline: none;
  transition: 0.2s background-color;
  width: 15%;

  svg {
    color: #2a2a2a;
    font-size: 1.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secundary};
    cursor: pointer;
    transition: 0.2s background-color;
  }
`;
