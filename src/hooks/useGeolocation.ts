import { useCallback, useEffect } from 'react';

export type GeolocationProps = {
  lat: number | null;
  lon: number | null;
};

const useGeolocation = () => {
  const handleGeolocation = useCallback(async (): Promise<GeolocationProps> => {
    if ('geolocation' in navigator) {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          (currPosition) => {
            const { latitude, longitude } = currPosition.coords;

            resolve({ lat: latitude, lon: longitude });
          },
          () => {
            resolve({ lat: -8.0539, lon: -34.8811 });
          },
        );
      });
    }
    return null;
  }, []);

  useEffect(() => {
    handleGeolocation();
  }, [handleGeolocation]);

  return { handleGeolocation };
};

export default useGeolocation;
