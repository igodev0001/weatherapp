import React from 'react';
import clouds from '@assets/images/clouds.png';

import * as S from './styles';

export default function WeatherCard() {
  return (
    <S.Container>
      <S.Temperature>60º</S.Temperature>
      <S.Average>58º / 61º</S.Average>
      <S.Location>Recife, PE</S.Location>

      <S.Clouds src={clouds} />
    </S.Container>
  );
}
