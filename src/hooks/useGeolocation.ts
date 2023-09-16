import { useCallback, useEffect, useState } from 'react';

type GeolocationProps = {
  lat: number | null;
  lon: number | null;
};

const useGeolocation = () => {
  const [geolocation, setGeolocation] = useState<GeolocationProps>({
    lat: null,
    lon: null,
  });

  const handleGeolocation = useCallback(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((currPosition) => {
        const { latitude, longitude } = currPosition.coords;
        setGeolocation({
          lat: latitude,
          lon: longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    handleGeolocation();
  }, [handleGeolocation]);

  return { geolocation };
};

export default useGeolocation;
