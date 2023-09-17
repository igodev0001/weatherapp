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
            resolve({ lat: -8.05224, lon: -34.928612 });
          },
        );
      });
    }
    return { lat: -8.05224, lon: -34.928612 };
  }, []);

  useEffect(() => {
    handleGeolocation();
  }, [handleGeolocation]);

  return { handleGeolocation };
};

export default useGeolocation;
