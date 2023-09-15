import axios from 'axios';

const getWeather = () => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=recife
    &appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=pt_br`,
  );
};

const getWeatherByCity = (city: string) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}
    &appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=pt_br`,
  );
};

export { getWeather, getWeatherByCity };
