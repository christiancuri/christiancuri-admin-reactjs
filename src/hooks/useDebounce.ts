import { useState, useEffect } from 'react';

export const useDebounce = <T>(value: T, delay = 500): T => {
  const [stateValue, setStateValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setStateValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [delay, value]);

  return stateValue;
};
