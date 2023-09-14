import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  align-items: center;
  background-color: #99adcc;
  border-radius: 0.5rem;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  transition: 0.2s background-color;
  width: 20rem;

  &:hover {
    background-color: #7e92ae;
    transition: 0.2s background-color;
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
  width: 80%;
`;

export const SearchBtn = styled.button`
  align-items: center;
  background: none;
  border: none;
  border-radius: 0 0.5rem 0.5rem 0;
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: center;
  outline: none;
  transition: 0.2s background-color;
  width: 15%;

  svg {
    color: #131313;
    font-size: 1.5rem;
  }

  &:hover {
    background-color: #99adcc;
    cursor: pointer;
    transition: 0.2s background-color;
  }
`;
