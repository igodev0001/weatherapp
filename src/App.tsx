import React, { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { getWeather, getWeatherByCity } from '@api/weatherApi';
import useCustomTheme from '@hooks/useCustomTheme';
import useGeolocation from '@hooks/useGeolocation';
import WeatherCard from '@components/WeatherCard';
import SearchBar from '@components/SearchBar';
import WeatherDetails from '@components/WeatherDetails';

import * as S from './global.styles';

function App() {
  const { theme, handleTheme } = useCustomTheme();
  const { handleGeolocation } = useGeolocation();

  const queryClient = useQueryClient();

  const {
    data: response,
    isLoading,
    isError,
  } = useQuery({
    queryKey: 'weather',
    queryFn: async () => {
      return getWeather(await handleGeolocation());
    },
  });
  const { mutate, isLoading: mutateLoading } = useMutation({
    mutationFn: getWeatherByCity,
    onSuccess: (mutationData) => {
      queryClient.setQueryData('weather', mutationData);
    },
  });

  useEffect(() => {
    handleTheme(response?.data.main.temp);
  }, [response, handleTheme]);

  return (
    <ThemeProvider theme={theme}>
      <S.AppWrapper>
        <SearchBar handleSearch={mutate} />

        <WeatherCard
          data={response?.data}
          isLoading={isLoading || mutateLoading}
        />

        {!isError && !isLoading && <WeatherDetails data={response?.data} />}
      </S.AppWrapper>
    </ThemeProvider>
  );
}

export default App;
