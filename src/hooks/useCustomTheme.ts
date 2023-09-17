import { useState } from 'react';
import { cold, hot } from '@styles/themes';

const useCustomTheme = () => {
  const [theme, setTheme] = useState(cold);

  const handleTheme = (temperature: number) => {
    setTheme(temperature >= 30 ? hot : cold);
  };

  return { theme, handleTheme };
};

export default useCustomTheme;
