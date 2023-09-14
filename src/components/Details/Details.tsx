import React, { useState } from 'react';
import { AnimatePresence, Variants } from 'framer-motion';
import { TbListDetails, TbWindmill } from 'react-icons/tb';
import { BsFillCloudLightningRainFill } from 'react-icons/bs';
import { IoMdWater } from 'react-icons/io';

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
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
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
            <S.Detail variants={childrenVariants}>
              <TbWindmill />
              <div>
                <h5>Vento</h5>
                <h3>17km/h</h3>
              </div>
            </S.Detail>

            <S.Detail variants={childrenVariants}>
              <IoMdWater />
              <div>
                <h5>Umidade</h5>
                <h3>31%</h3>
              </div>
            </S.Detail>

            <S.Detail variants={childrenVariants}>
              <BsFillCloudLightningRainFill />
              <div>
                <h5>Chuva</h5>
                <h3>10%</h3>
              </div>
            </S.Detail>
          </S.Wrapper>
        )}
      </AnimatePresence>
    </>
  );
}
