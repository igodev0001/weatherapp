import React, { useState } from 'react';
import { AnimatePresence, Variants } from 'framer-motion';
import { BiWind } from 'react-icons/bi';
import { BsCloudLightningRainFill } from 'react-icons/bs';
import { MdOutlineWaterDrop } from 'react-icons/md';
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
              <div>
                <h5>Vento</h5>
                <h3>17km/h</h3>
              </div>
              <BiWind />
            </S.Detail>

            <S.Detail variants={childrenVariants}>
              <div>
                <h5>Umidade</h5>
                <h3>31%</h3>
              </div>
              <MdOutlineWaterDrop />
            </S.Detail>

            <S.Detail variants={childrenVariants}>
              <div>
                <h5>Chuva</h5>
                <h3>10%</h3>
              </div>
              <BsCloudLightningRainFill />
            </S.Detail>
          </S.Wrapper>
        )}
      </AnimatePresence>
    </>
  );
}