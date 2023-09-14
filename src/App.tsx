import React from 'react';
import WeatherCard from '@components/WeatherCard';
import SearchBar from '@components/SearchBar';
import Details from '@components/Details';

import * as S from './global.styles';

function App() {
  return (
    <S.AppWrapper>
      <SearchBar />
      <Details />
      <WeatherCard />
    </S.AppWrapper>
  );
}

export default App;
