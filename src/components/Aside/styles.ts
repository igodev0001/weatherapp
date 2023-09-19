import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.aside)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shade};
  border-radius: 0.75rem 0.75rem 0 0;
  bottom: 0;
  display: flex;
  flex-flow: row;
  height: 3rem;
  justify-content: space-between;
  padding: 0.25rem 1rem;
  position: fixed;
  right: 1rem;
  width: 6rem;
  z-index: 10;

  a {
    align-items: center;
    display: flex;

    &:hover {
      cursor: pointer;
    }
  }

  svg {
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
  }
`;

export default Container;
