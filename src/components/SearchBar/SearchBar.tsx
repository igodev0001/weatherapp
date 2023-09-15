import React, { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';

import * as S from './styles';

type SearchBarProps = {
  handleSearch: (city: string) => void;
};

export default function SearchBar({ handleSearch }: SearchBarProps) {
  const searchInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { current } = searchInput;

    handleSearch(current?.value);
  };

  return (
    <S.Container
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: 1,
        transition: { delay: 0.6, duration: 0.4, type: 'spring', bounce: 0.35 },
      }}
      onSubmit={handleSubmit}
    >
      <S.Input type="text" ref={searchInput} />
      <S.SearchBtn
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={handleSubmit}
      >
        <BiSearch />
      </S.SearchBtn>
    </S.Container>
  );
}
