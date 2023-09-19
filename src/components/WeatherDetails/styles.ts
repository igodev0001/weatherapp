import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Action = styled(motion.button)`
  align-items: center;
  background-color: #2a2a2a;
  border: none;
  border-radius: 100%;
  display: flex;
  flex-flow: column;
  height: 2.5rem;
  justify-content: center;
  margin-left: 20rem;
  margin-top: 2rem;
  position: absolute;
  width: 2.5rem;
  z-index: 10;

  svg {
    color: #f9f9f9;
    font-size: 1.25rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.contrast};
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  h3,
  h5 {
    align-items: flex-end;
    display: flex;
    height: 1.5rem;
  }
`;

export const Container = styled(motion.div)`
  align-items: center;
  background-color: #2a2a2a;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 10%),
    0 2px 4px -2px rgb(0 0 0 / 10%);
  display: flex;
  gap: 1rem;
  height: 4rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 1rem;
  padding-right: 0.75rem;
  position: relative;
  transition:
    0.2s background-color,
    0.8s color;
  width: 8.5rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.75rem;
    transition: 0.8s color;
  }

  &:hover {
    background-color: #13131399;
    transition: 0.2s background-color;
  }
`;

export const Wrapper = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  justify-content: center;
  margin-left: 32.5rem;
  margin-top: 2rem;
  position: absolute;
  z-index: 10;
`;
