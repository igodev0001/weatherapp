import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Action = styled(motion.button)`
  align-items: center;
  background-color: '#fff';
  border: none;
  border-radius: 100%;
  display: flex;
  flex-flow: column;
  height: 2.5rem;
  justify-content: center;
  margin-top: 2rem;
  margin-left: 20rem;
  position: absolute;
  width: 2.5rem;
  z-index: 10;

  svg {
    color: #131313;
    font-size: 1.25rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Detail = styled(motion.div)`
  align-items: center;
  background-color: #99adcc;
  border-radius: 0.5rem;
  display: flex;
  gap: 1rem;
  height: 4rem;
  justify-content: space-between;
  padding: 0.75rem;
  width: 9rem;

  svg {
    font-size: 1.75rem;
  }
`;

export const Wrapper = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  justify-content: center;
  margin-left: 32rem;
  margin-top: 2rem;
  position: absolute;
`;
