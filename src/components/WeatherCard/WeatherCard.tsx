import React from 'react';
import cloudTexture from '@assets/images/cloud_texture.png';
import clouds from '@assets/svgs/clouds.svg';

import * as S from './styles';

export default function WeatherCard() {
  return (
    <S.Wrapper>
      <S.Clouds
        src={clouds}
        initial={{ opacity: 0, x: -40, scale: 1.5 }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { delay: 0.2 },
        }}
      />

      <S.Container
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { delay: 0.2 } }}
      >
        <S.Temperature>60º</S.Temperature>
        <S.Average>58º / 61º</S.Average>
        <S.Location>Recife, PE</S.Location>

        <S.Texture
          whileInView={{
            scale: [1, 1.5, 1],
            x: [0, 50, 0],
            transition: {
              duration: 30,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
            },
          }}
          src={cloudTexture}
        />
      </S.Container>
    </S.Wrapper>
  );
}
