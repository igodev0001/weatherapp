import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getWeather, getWeatherByCity } from '@api/weatherApi';
import WeatherCard from '@components/WeatherCard';
import SearchBar from '@components/SearchBar';
import Details from '@components/Details';

import * as S from './global.styles';

function App() {
  const queryClient = useQueryClient();

  const { data: response } = useQuery({
    queryKey: 'weather',
    queryFn: getWeather,
  });
  const { mutate } = useMutation({
    mutationFn: getWeatherByCity,
    onSuccess: (mutationData) => {
      queryClient.setQueryData('weather', mutationData);
    },
  });

  return (
    <S.AppWrapper>
      <SearchBar handleSearch={mutate} />
      <Details />
      <WeatherCard data={response?.data} />
    </S.AppWrapper>
  );
}

export default App;
