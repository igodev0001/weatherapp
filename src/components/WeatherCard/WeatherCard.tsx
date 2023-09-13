import React from 'react';
import cloudTexture from '@assets/images/cloud_texture.png';
import clouds from '@assets/images/clouds.png';

import * as S from './styles';

export default function WeatherCard() {
  return (
    <S.Wrapper>
      <S.Clouds src={clouds} />

      <S.Container>
        <S.Temperature>60º</S.Temperature>
        <S.Average>58º / 61º</S.Average>
        <S.Location>Recife, PE</S.Location>

        <S.Texture src={cloudTexture} />
      </S.Container>
    </S.Wrapper>
  );
}
