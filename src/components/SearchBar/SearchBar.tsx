import React from 'react';
import { BiSearch } from 'react-icons/bi';

import * as S from './styles';

export default function SearchBar() {
  return (
    <S.Container
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: 1,
        transition: { delay: 0.4, duration: 0.4, type: 'spring', bounce: 0.35 },
      }}
    >
      <S.Input type="text" />
      <S.SearchBtn initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <BiSearch />
      </S.SearchBtn>
    </S.Container>
  );
}
