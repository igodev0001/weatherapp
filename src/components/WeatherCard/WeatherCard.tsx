import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { WeatherProps } from '@api/weatherApi';
import clouds from '@assets/svgs/clouds.svg';

import * as S from './styles';

type WeatherCardProps = {
  data: WeatherProps;
  isLoading: boolean;
};

export default function WeatherCard({ data, isLoading }: WeatherCardProps) {
  return (
    <S.Wrapper>
      <S.CloudsIcon
        src={clouds}
        initial={{ opacity: 0, x: -40, scale: 1.5 }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { delay: 0.8 },
        }}
        drag
        dragConstraints={{ bottom: 5, left: 5, right: 5, top: 5 }}
      />

      <S.Container
        initial={{ scale: 0, y: 1000 }}
        animate={{ scale: 1, y: 0, transition: { delay: 0.2 } }}
      >
        {isLoading ? (
          <S.Loading
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
          </S.Loading>
        ) : (
          <>
            <S.WeatherIcon
              src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}
            />
            <S.Description>{data?.weather[0].description}</S.Description>

            <S.Temperature>{`${Math.round(data?.main.temp)}º`}</S.Temperature>
            <S.Average>{`${Math.round(data?.main.temp_min)}º / ${Math.round(
              data?.main.temp_max,
            )}º`}</S.Average>
            <S.Location>{`${data?.name}, ${data?.sys.country}`}</S.Location>
          </>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
