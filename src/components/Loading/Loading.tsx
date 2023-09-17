import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

import * as S from './styles';

export default function Loading() {
  return (
    <S.Spinner
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileInView={{
        rotate: '360deg',
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        },
      }}
    >
      <BiLoaderAlt />
    </S.Spinner>
  );
}
