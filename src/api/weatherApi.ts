import axios, { AxiosResponse } from 'axios';

export type WeatherProps = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  visibility: number;
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  name: string;
};

const getWeather = (): Promise<AxiosResponse<WeatherProps>> => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=recife
    &appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=pt_br`,
  );
};

const getWeatherByCity = (
  city: string,
): Promise<AxiosResponse<WeatherProps>> => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}
    &appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=pt_br`,
  );
};

export { getWeather, getWeatherByCity };
