import styled from 'styled-components';

export const Average = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
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
  position: relative;
  width: 20rem;
`;

export const Clouds = styled.img`
  background-size: cover;
  height: 100%;
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
  bottom: 4rem;
  font-size: 1.75rem;
  font-weight: 600;
  position: absolute;
`;
