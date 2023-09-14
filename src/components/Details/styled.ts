import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Action = styled(motion.button)`
  align-items: center;
  background-color: '#fff';
  border: none;
  border-radius: 100%;
  display: flex;
  flex-flow: column;
  height: 2rem;
  justify-content: center;
  margin-top: 2rem;
  margin-left: 20rem;
  position: absolute;
  width: 2rem;
  z-index: 10;

  svg {
    color: #131313;
    font-size: 1rem;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  justify-content: center;
  margin-left: 32rem;
  margin-top: 2rem;
  position: absolute;
  z-index: 10;
`;

export const Container = styled(motion.div)`
  background-color: #99adcc;
  border-radius: 0.5rem;
  height: 4rem;
  width: 8rem;
`;
