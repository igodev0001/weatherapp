import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Spinner = styled(motion.span)`
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 45%;
  z-index: 10;

  svg {
    color: #2a2a2a;
    font-size: 2rem;
  }
`;

export default Spinner;
