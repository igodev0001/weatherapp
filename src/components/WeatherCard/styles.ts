import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Average = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  position: absolute;
  top: 55%;
`;

export const Clouds = styled.img`
  height: 4rem;
  left: -3rem;
  position: absolute;
  top: 4rem;
  z-index: 10;
`;

export const Container = styled.div`
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 10%),
    0 2px 4px -2px rgb(0 0 0 / 10%);
  display: flex;
  flex-flow: column;
  height: 24rem;
  justify-content: center;
  mix-blend-mode: multiply;
  overflow: hidden;
  width: 20rem;
`;

export const Location = styled.h2`
  bottom: 4rem;
  font-size: 1.75rem;
  font-weight: 600;
  position: absolute;
`;

export const Temperature = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  margin-left: 0.75rem;
  position: absolute;
  top: 35%;
`;

export const Texture = styled(motion.img)`
  background-size: cover;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  width: 150%;
  z-index: -10;
`;

export const Wrapper = styled.div`
  position: relative;
`;
