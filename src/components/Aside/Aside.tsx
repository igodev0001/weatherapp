import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import * as S from './styles';

export default function Aside() {
  return (
    <S.Container initial={{ y: 30 }} whileHover={{ y: 5 }}>
      <a href="http://github.com/fnandesrafael" target="_blank">
        <AiFillGithub />
      </a>
      <a
        href="http://linkedin.com/in/fnandesrafael/?locale=en_US"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>
    </S.Container>
  );
}
