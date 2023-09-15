import React, { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getWeather, getWeatherByCity } from '@api/weatherApi';
import useCustomTheme from '@hooks/useTheme';
import WeatherCard from '@components/WeatherCard';
import SearchBar from '@components/SearchBar';
import Details from '@components/Details';

import { ThemeProvider } from 'styled-components';
import * as S from './global.styles';

function App() {
  const { theme, handleTheme } = useCustomTheme();
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

  useEffect(() => {
    handleTheme(response?.data.main.temp);
  }, [response, handleTheme]);

  return (
    <S.AppWrapper>
      <ThemeProvider theme={theme}>
        <SearchBar handleSearch={mutate} />
        <WeatherCard data={response?.data} />
        <Details data={response?.data} />
      </ThemeProvider>
    </S.AppWrapper>
  );
}

export default App;
