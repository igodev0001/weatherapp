import React from 'react';
import WeatherCard from '@components/WeatherCard';

import * as S from './global.styles';

function App() {
  return (
    <S.AppWrapper>
      <WeatherCard />
    </S.AppWrapper>
  );
}

export default App;
