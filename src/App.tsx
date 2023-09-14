import React from 'react';
import WeatherCard from '@components/WeatherCard';
import SearchBar from '@components/SearchBar';

import * as S from './global.styles';

function App() {
  return (
    <S.AppWrapper>
      <SearchBar />
      <WeatherCard />
    </S.AppWrapper>
  );
}

export default App;
