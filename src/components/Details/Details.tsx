import React, { useState } from 'react';
import { AnimatePresence, Variants } from 'framer-motion';
import { TbListDetails } from 'react-icons/tb';

import * as S from './styled';

const rootVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
  exit: { transition: { staggerChildren: 0.1 } },
};

const childrenVariants: Variants = {
  initial: { x: -30, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -30, opacity: 0 },
};

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

      <AnimatePresence>
        {showDetails && (
          <S.Wrapper
            initial="initial"
            animate="animate"
            exit="exit"
            variants={rootVariants}
          >
            <S.Container variants={childrenVariants} />
            <S.Container variants={childrenVariants} />
            <S.Container variants={childrenVariants} />
          </S.Wrapper>
        )}
      </AnimatePresence>
    </>
  );
}
