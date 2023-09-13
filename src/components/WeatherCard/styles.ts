import styled from 'styled-components';

export const Average = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Container = styled.div`
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 0.5rem;
  display: flex;
  flex-flow: column;
  height: 24rem;
  overflow: hidden;
  position: relative;
  mix-blend-mode: multiply;
  justify-content: center;
  width: 20rem;
`;

export const Clouds = styled.img`
  background-size: cover;
  height: 150%;
  object-fit: cover;
  pointer-events: none;
  position: absolute;
  width: 150%;
  z-index: -10;
`;

export const Temperature = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  margin-left: 0.75rem;
`;

export const Location = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  position: absolute;
  bottom: 4rem;
`;
