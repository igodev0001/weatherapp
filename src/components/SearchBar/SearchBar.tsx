import React from 'react';
import { BiSearch } from 'react-icons/bi';

import * as S from './styles';

export default function SearchBar() {
  return (
    <S.Container>
      <S.Input type="text" />
      <S.SearchBtn>
        <BiSearch />
      </S.SearchBtn>
    </S.Container>
  );
}
