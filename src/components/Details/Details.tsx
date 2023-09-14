import React, { useState } from 'react';
import { TbListDetails } from 'react-icons/tb';

import * as S from './styled';

export default function Details() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <S.Action
        whileTap={{ scale: 0.8 }}
        onClick={() => setShowDetails((prevState) => !prevState)}
      >
        <TbListDetails />
      </S.Action>

      {showDetails && (
        <S.Wrapper>
          <S.Container />
          <S.Container />
          <S.Container />
        </S.Wrapper>
      )}
    </>
  );
}
