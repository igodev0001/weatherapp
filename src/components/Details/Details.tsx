import React, { useEffect, useState } from 'react';
import { AnimatePresence, Variants } from 'framer-motion';
import { BiWind, BiSolidDroplet } from 'react-icons/bi';
import { BsCloudsFill } from 'react-icons/bs';
import { TbListDetails } from 'react-icons/tb';
import { WeatherProps } from '@api/weatherApi';

import * as S from './styles';

type DetailsProps = {
  data: WeatherProps;
};

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

export default function Details({ data }: DetailsProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [showAction, setShowAction] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAction(true);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {showAction && (
        <S.Action
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => setShowDetails((prevState) => !prevState)}
        >
          <TbListDetails />
        </S.Action>
      )}

      <AnimatePresence>
        {showDetails && (
          <S.Wrapper
            initial="initial"
            animate="animate"
            exit="exit"
            variants={rootVariants}
          >
            <S.Detail variants={childrenVariants}>
              <S.Content>
                <h5>Wind</h5>
                <h3>{`${Math.round(data?.wind.speed)}km/h`}</h3>
              </S.Content>

              <BiWind />
            </S.Detail>

            <S.Detail variants={childrenVariants}>
              <S.Content>
                <h5>Umidity</h5>
                <h3>{`${data?.main.humidity}%`}</h3>
              </S.Content>

              <BiSolidDroplet />
            </S.Detail>

            <S.Detail variants={childrenVariants}>
              <S.Content>
                <h5>Clouds</h5>
                <h3>{`${data?.clouds.all}%`}</h3>
              </S.Content>

              <BsCloudsFill />
            </S.Detail>
          </S.Wrapper>
        )}
      </AnimatePresence>
    </>
  );
}
